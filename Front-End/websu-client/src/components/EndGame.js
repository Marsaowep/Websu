import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { socket } from "../App";

export default function EndGame() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  console.log("asldkufhdlaskfhasdflsf");

  //const listPlayers = location.state.players.map((d) => <li key={d}>{d}</li>);

  //const listScores = location.state.scores.map((d) => <li key={d}>{d}</li>);

  var temp_players = location.state.players;

  const lobby = () => {
    navigate("/JoinLobby", {
      state: {
        lobbyId: location.state.lobby,
        players: location.state.players,
        host: location.state.host,
        username: location.state.username,
      },
    });
  };

  const menu = () => {
    socket.emit("leaveLobby", {
      room: location.state.lobby,
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
    if(data.hostLeft){
      navigate("/MainMenu", {
        state: {
          username: location.state.username,
        },
      });
    }
    else{
      location.state.players = data.players;
    }

  });

  return (
    <div className="EndGame">
      <h1> GAME ENDED LOL</h1>
      <div className="text-center text-light align-items-center mb-3 d-flex flex-column ">
        <h2>Lobby Code: {location.state.lobbyId}</h2>
        <div className="players_container">
          <h2>Winner: </h2>
          <div className="Lists d-flex flex-row justify-content-around">
            <h2>{location.state.winner}</h2>
          </div>
        </div>

        <button type="button" onClick={lobby}>
          Back To Lobby
        </button>
        <button type="button" onClick={menu}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}
