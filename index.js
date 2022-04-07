const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

server.listen(4000, () => {
  console.log("listening on *:4000");
});
app.get('/', (req, res) => {
   
});
io.on('connection', (socket) => {
  console.log('a user connected'); 
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('sendMessage', (msg) => {
    console.log(msg);
  });
});