import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";

function JoinLobby(){
    
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();
    const startGame = () => navigate("/Game");
    return(
        <div>
            <h1>{location.state.lobbyId}</h1>
            <button type='button' onClick={startGame}>Start</button>
        </div>
    );
}

export default JoinLobby;