import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";

function JoinLobby() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const startGame = () => navigate("/Game", { state: location.state });

  const listItems = location.state.players.map((d) => <li key={d}>{d}</li>);
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
      </div>
    </div>
  );
}

export default JoinLobby;
