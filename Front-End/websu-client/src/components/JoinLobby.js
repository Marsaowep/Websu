import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { socket } from "../index";

function JoinLobby() {
  const location = useLocation();
  const [players, setPlayers] = useState(location.state.players);
  console.log(location.state);
  const navigate = useNavigate();
  const startGame = () => {
    if (location.state.host === location.state.username) {
      console.log("YOYOYOYOYOYOYOYOYO");
      socket.emit("gameStarted", {
        roomId: location.state.lobbyId,
        username: location.state.username,
        isHost: true,
      });
    } else {
      window.alert("You Are Not the Host");
    }
  };

  const goBack = () => {
    socket.emit("leaveLobby", {
      room: location.state.lobbyId,
      username: location.state.username,
    });

    navigate("/MainMenu", {
      state: {
        username: location.state.username,
      },
    });
  };

  socket.on("roomDeleted", (data) => {
    //alert("Host has closed the Lobby!");
    if (data.hostLeft) {
      navigate("/MainMenu", {
        state: {
          username: location.state.username,
        },
      });
    } else {
      console.log("asjkgasdfgjasdfgjhkasasdfjasdfjhasdfjhasdf", data);
      var temp = [];
      for (let i = 0; i < data.players.length; i++) {
        temp.push(data.players[i]);
      }

      setPlayers(temp);
      location.state.players = players;
    }
  });

  socket.on("lobbyName", (data) => {
    setPlayers(data.usernames);
  });

  socket.on("hostStarted", (data) => {
    console.log(data);
    if (data.hostStarted) {
      navigate("/Game", { state: location.state });
    }
  });

  const listItems = players.map((d) => <li key={d}>{d}</li>);
  return (
    <div className="roomContainer">
      <div className="text-center text-light align-items-center mb-3 d-flex flex-column ">
        <h2>Lobby Code: {location.state.lobbyId}</h2>
        <div className="players_container">
          <h2>Lobby Players: </h2>
          {listItems}
        </div>

        <button type="button" onClick={startGame}>
          Start
        </button>

        <button type="button" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default JoinLobby;
