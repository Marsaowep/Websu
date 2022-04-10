const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.post("/login", function (req, res) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);

  res.send({
    text: "LETS GOOOOO",
  });
});

server.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});

io.on("connection", (socket) => {
  console.log("a user connected");
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
