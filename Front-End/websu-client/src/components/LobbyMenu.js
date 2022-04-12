import React, { Component, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { socket } from "../App";

export default function LobbyMenu() {
  var location = useLocation();

  const [lobbyId, setLobbyId] = useState();
  var theLobbyId = "";
  var players = [];
  var host = "";
  var playerScores = [];
  var username = location.state.response.name;
  var roomExists = false;

  let navigate = useNavigate();

  console.log("username: ", username);
  const createLobby = () => {
    socket.emit("createLobby", {
      username: username,
    });
  };

  const joinALobby = (e) => {
    e.preventDefault();
    socket.emit("joinLobby", {
      username: username,
      roomId: lobbyId,
    });
  };

  socket.on("lobbyId", async (data) => {
    console.log(data.room);
    console.log(data.players);
    console.log(data.host);
    theLobbyId = data.room;
    players = data.players;
    host = data.host;
    navigate("/JoinLobby", {
      state: {
        username: username,
        players: players,
        lobbyId: theLobbyId,
        host: host,
      },
    });
  });

  socket.on("lobbyName", (data) => {
    roomExists = data.roomExists;
    players = data.usernames;
    host = data.lobbyHost;
    theLobbyId = data.room;

    if (roomExists) {
      navigate("/JoinLobby", {
        state: {
          username: username,
          players: players,
          lobbyId: theLobbyId,
          host: host,
        },
      });
    } else {
      window.alert("Lobby Doesn't exist");
    }
  });

  socket.on("updateScores", (data) => {
    playerScores = data.scores;
  });

  return (
    <div className="lobby_menu_container">
      <div className="menu_buttons text-center text-light align-items-center mb-3 d-flex flex-column ">
        <button
          className="mb-5 mt-5"
          onClick={() => {
            createLobby(username);
          }}
        >
          Create A Lobby
        </button>
        <form
          className="text-center text-light align-items-center d-flex flex-column w-25"
          onSubmit={joinALobby}
        >
          <label htmlFor="user_name">Lobby Code:</label>
          <input
            className="w-75"
            type="text"
            id="room_id"
            name="room_id"
            onChange={(e) => setLobbyId(e.target.value)}
          ></input>

          <input className="mt-4 w-75" type="submit" data="Join"></input>
        </form>
      </div>
    </div>
  );
}
