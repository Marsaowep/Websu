import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";

function JoinLobby(props){
    
    const location = useLocation();
    console.log(location.state.lobbyId);
    function startGame(){

    }
    return(
        <div>
            <h1>{location.state.lobbyId}</h1>
            <button type='button' onClick={startGame()}>Start</button>
        </div>
    );
}

export default JoinLobby;