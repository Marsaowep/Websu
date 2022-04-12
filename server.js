const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require("cors");
const bodyParser = require("body-parser");

var userCount = 0;
var connectedClients = {};

var rooms = [];

const { MongoClient } = require("mongodb");
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();
const uri = process.env.ATLAS_URI; //read in secret mongo url from .env

const PORT = process.env.PORT || 3001;

//Listening for the login post request from login form
app.post("/login", async function (req, res) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  var user = await getUser(req.body.username, req.body.password);
  console.log("user is...: ", user);
  res.send({
    response: user,
  });
});

//Listening for the register post request from login form
app.post("/register", async function (req, res) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  var reg = await registerUser(req.body.username, req.body.password);
  if (reg) {
    var user = await getUser(req.body.username, req.body.password);
    res.send({
      response: user,
    });
  } else {
    console.log("Reg is...: ", reg);
    res.send({
      response: reg,
    });
  }
});

server.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});

function generateId() {
  var length = 6;
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  while (1) {
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var obj = rooms.find((e) => e.roomId === result);
    if (typeof obj === "undefined") {
      break;
    }
  }
  return result;
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("createLobby", (data) => {
    var roomId = generateId();
    socket.join(roomId);
    console.log(data.username);
    console.log("socket room: ", io.sockets.adapter.rooms.get(roomId));
    var room = {
      roomId: roomId,
      host: data.username,
      players: [data.username],
      scores: [0],
    };

    rooms.push(room);

    console.log("the host: ", rooms.find((e) => e.roomId === roomId).host);
    console.log(
      "the players: ",
      rooms.find((e) => e.roomId === roomId).players
    );
    console.log("the scores: ", rooms.find((e) => e.roomId === roomId).scores);
    io.sockets.to(roomId).emit("lobbyId", {
      room: rooms.find((e) => e.roomId === roomId).roomId,
      host: rooms.find((e) => e.roomId === roomId).host,
      players: rooms.find((e) => e.roomId === roomId).players,
    });

    console.log("game created! ID: ", roomId);
  });

  socket.on("leaveLobby", (data) => {
    if (rooms.find((e) => e.roomId === data.room).host == data.username) {
      rooms = rooms.splice(
        rooms.indexOf((e) => e.roomId === data.room),
        1
      );
      io.sockets.to(data.room).emit("roomDeleted", {
        hostLeft: true,
      });
      io.in(data.room).socketsLeave(data.room);
    } else {
      var players = rooms.find((e) => e.roomId === data.room).players;
      var player_index = players.indexOf(data.username) - 1;
      console.log(player_index);
      players = players.splice(player_index, 1);
      console.log(players);
      scores = rooms.find((e) => e.roomId === data.room).scores;
      scores = scores.splice(player_index, 1);
      rooms.find((e) => e.roomId === data.room).scores = scores;
      rooms.find((e) => e.roomId === data.room).players = players;

      io.sockets.to(data.room).emit("roomDeleted", {
        hostLeft: false,
        players: players
      });
      socket.leave(data.room);
    }
  });

  socket.on("joinLobby", (data) => {
    if (typeof rooms.find((e) => e.roomId === data.roomId) !== "undefined") {
      socket.join(data.roomId);

      console.log(data.roomId);

      rooms.find((e) => e.roomId === data.roomId).players.push(data.username);
      rooms.find((e) => e.roomId === data.roomId).scores.push(0);

      console.log(
        "the host: ",
        rooms.find((e) => e.roomId === data.roomId).host
      );
      console.log(
        "the players: ",
        rooms.find((e) => e.roomId === data.roomId).players
      );
      console.log(
        "the scores: ",
        rooms.find((e) => e.roomId === data.roomId).scores
      );

      io.sockets.to(data.roomId).emit("lobbyName", {
        usernames: rooms.find((e) => e.roomId === data.roomId).players,
        lobbyHost: rooms.find((e) => e.roomId === data.roomId).host,
        room: data.roomId,
        roomExists: true,
      });
    } else {
      console.log(data.roomId);
      io.sockets.to(data.roomId).emit("lobbyName", {
        room: data.roomId,
        roomExists: false,
      });

      console.log("room doesnt exist");
    }
  });

  socket.on("matchScores", (data) => {
        io.sockets.to(data.room).emit("updateScores", {
      username: data.username
    });
  });

  socket.on("gameStarted", (data) => {
    console.log(data.isHost);
    if (data.isHost) {
      console.log(data);
      io.sockets.to(data.roomId).emit("hostStarted", {
        hostStarted: data.isHost,
      });
    }
  });

  io.emit("sendMessage", "SUCCESSFULLY CONNECTED");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//MONGO DB FUNCTIONS :))
// Make new user

async function mongoConnect() {
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("CONNECTED CONNEECTED CONNECTED");
  } catch {
    console.log("oops it broke :(");
  }

  return client;
}

// Return user if passwords match, otherwise return an error
async function getUser(username, password) {
  client = await mongoConnect();

  const user = await client
    .db("WebSuDB")
    .collection("User_Profile")
    .findOne({ name: username });

  // Check if user actually exists
  if (user) {
    if (user.password === password) {
      return user;
    } else {
      console.log("incorrect password");
      return null; // Place holder for now, replace with better logic later
    }
  }
}

async function registerUser(username, userPassword) {
  client = await mongoConnect();
  const profileCollection = await client
    .db("WebSuDB")
    .collection("User_Profile");
  const defaultScore = 0;

  if (await checkUserExists(client, username)) {
    console.log("error, user already exists");
    return false;
  }

  // Set up JSON object of user info
  const newUser = {
    name: username,
    password: userPassword,
    high_score: defaultScore,
  };

  const result = profileCollection.insertOne(newUser);
  console.log(`New user created with the following id: ${result.insertedId}`);
  return true;
}

// Find existing user
async function checkUserExists(client, username) {
  console.log("Checking if current name exists...");
  const result = await client
    .db("WebSuDB")
    .collection("User_Profile")
    .findOne({ name: username });

  console.log("return is: ", result);

  if (result) {
    // Check if result queried is null or not.
    return true;
  } else {
    return false;
  }
}

// Update a users high score
async function updateUserHighScore(username, newScore) {
  client = await mongoConnect();
  const originalUser = await client
    .db("WebSuDB")
    .collection("User_Profile")
    .findOne({ name: username });
  const updatedUser = originalUser; //safe copy
  updatedUser.high_score = newScore;
  const theUser = await client
    .db("WebSuDB")
    .collection("User_Profile")
    .updateOne({ name: username }, { $set: updatedUser });
}

// Add high score:
async function addHighScore(score, userName) {
  client = await mongoConnect();
  const newHighScore = {
    name: userName,
    high_score: score,
  };

  const high_scores = await client
    .db("WebSuDB")
    .collection("high_scores")
    .insertOne(newHighScore);
}

// Get 5 High Scores:
async function get5HighScores() {
  client = await mongoConnect();
  const high_scores = await client.db("WebSuDB").collection("high_scores");
  top5 = high_scores.find({}).sort({ high_score: -1 }).limit(5).toArray();
  return top5;
}
