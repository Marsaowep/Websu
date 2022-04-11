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


var rooms = {};


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

function generateId(){
  var length = 6;
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on('createLobby', (data) => {

    socket.roomId = generateId();
    socket.join(socket.roomId);
    var player = {
      username: data.username,
      score: 0
    };

    if(!rooms[socket.roomId])
      rooms[socket.roomId] = {};
    rooms[socket.roomId].host = data.username;
    rooms[socket.roomId].players = [];
    rooms[socket.roomId].players.push(player);

    socket.to(socket.roomId).emit('lobbyId', {
      lobbyId: socket.roomId,
      players: rooms[socket.roomId].players,
      theHost: rooms[socket.roomId].host
    });

    console.log('game created! ID: ', socket.roomId);
  });

  socket.on('leaveLobby', (data) =>{
    if(room[data.room].host == data.username){
      socket.to(data.room).emit('roomDeleted', {
        hostLeft: true
      });
      io.in(data.room).socketsLeave(data.room);
    }
    else{
      socket.leave(data.room);
    }

      socket.leave(data.room);
  })

  socket.on('joinLobby', (data) => {
    if(!rooms[data.room]){
      socket.join(data.room);
      var player = {
        username: data.username,
        score: 0
      };

      rooms[data.room].players.push(player);
      socket.to(data.room).emit('lobbyName', {
        usernames: rooms[data.room].players,
        lobbyHost: rooms[data.room].host,
        roomExists: true
      });

    }
    else{
      socket.to(data.room).emit('lobbyName', {
        usernames: rooms[data.room].players,
        lobbyHost: rooms[data.room].host,
        roomExists: false
      });

      console.log("room doesnt exist");
    }
  });

  socket.on('matchScores', (data) =>{
    let obj = rooms[data.room].players.find((o, i) => {
      if (o.username === data.username){
        rooms[data.room].players[i].score = data.score;
      }
    });
    socket.to(data.room).emit('updateScores', {
      usernames: rooms[data.room].players,
    });
  });

  io.emit("sendMessage", "SUCCESSFULLY CONNECTED");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("sendMessage", (msg) => {
    console.log(msg);
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
