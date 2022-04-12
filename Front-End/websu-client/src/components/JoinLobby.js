import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { socket } from "../App";

function JoinLobby(){
    
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();
    const startGame = () => {
        if(location.state.host === location.state.username){
            socket.emit('gameStarted', {
                roomId: location.state.lobbyId,
                username: location.state.username,
                isHost: true
            });
        }
        else{
            window.alert('You Are Not the Host');
        }
    };

    socket.on('hostStarted', (data) =>{
        console.log(data);
        if(data.hostStarted){
            navigate("/Game", {state: location})
        }
    });
    
    return(
        <div>
            <h1>{location.state.lobbyId}</h1>
            <button type='button' onClick={startGame}>Start</button>
        </div>
    );
}

export default JoinLobby;