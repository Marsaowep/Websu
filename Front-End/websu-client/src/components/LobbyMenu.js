import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { socket } from "../App";

function LobbyMenu(){
    const [lobbyId, setLobbyId] = useState();
    const [players, setPlayers] = useState();
    const [username, setUsername] = useState();
    const [roomExists, setRoomExists] = useState();
    const [lobbyHost, setLobbyHost] = useState();

    let navigate = useNavigate();

    function createLobby(username){
        socket.emit('createLobby', {
            username: username
        });
        navigate("/JoinLobby", {state: {username: username, players: players} });
        
    }

    function joinALobby(lobbyId, username){
        socket.emit('joinLobby', {
            username: username,
            room: lobbyId
        });

        if(roomExists){
            navigate("/JoinLobby", {state: {username: username, players: players} });
        }
        else{
            window.alert("Lobby Doesn't exist");
        }
    }

    socket.on('lobbyId', (data)=>{
        setLobbyId(data.lobbyId);
        setPlayers(data.players);
    });

    socket.on('lobbyName', (data) =>{
        setRoomExists(data.roomExists);
        setPlayers(data.players);
    });

    return(
        <div className="lobby_menu_container">
            <div className="menu_buttons">
                <button type='button' onClick={createLobby(username)}>Create A Lobby</button>
                <form onSubmit={joinALobby(lobbyId, username)}>
                    <label htmlFor="user_name">Lobby Code:</label>
                    <input
                        type="text"
                        id="room_id"
                        name="room_id"
                        onChange={(e) => setLobbyId(e.target.value)}
                    ></input>
                </form>
            </div>
        </div>
    );
}

export default LobbyMenu;