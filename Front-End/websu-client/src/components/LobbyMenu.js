import React, { Component, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { socket } from "../App";

export default function LobbyMenu(props){
    const [lobbyId, setLobbyId] = useState();
    const [players, setPlayers] = useState();
    const [username, setUsername] = useState();
    const [roomExists, setRoomExists] = useState();
    const [lobbyHost, setLobbyHost] = useState();

    let navigate = useNavigate();
    let location = useLocation();

    const createLobby = () => {
        socket.emit('createLobby', {
            username: 'gamer'
        }, function(data) {
            console.log(data.lobbyId);
            setLobbyId(data.lobbyId);
            setPlayers(data.usernames);
            setLobbyHost(data.lobbyHost);
        });

        console.log(lobbyId);
        navigate("/JoinLobby", {state: {username: username, players: players, lobbyId: lobbyId} });
        
    }

    const joinALobby = (lobbyId, username) => {
        socket.emit('joinLobby', {
            username: username,
            room: lobbyId
        });

        if(roomExists){
            navigate("/JoinLobby", {state: {username: username, players: players, lobbyId: lobbyId} });
        }
        else{
            window.alert("Lobby Doesn't exist");
        }
    }

    socket.on('lobbyId', async (data)=>{
        console.log(data.lobbyId);
        setLobbyId(data.lobbyId);
        setPlayers(data.usernames);
        setLobbyHost(data.lobbyHost);
    });

    socket.on('lobbyName', (data) =>{
        setRoomExists(data.roomExists);
        setPlayers(data.usernames);
        setLobbyHost(data.lobbyHost);
    });

    socket.on('updateScores', (data) =>{
        setPlayers(data.usernames)
    });

    return(
        <div className="lobby_menu_container">
            <div className="menu_buttons">
                <button onClick={() => {createLobby(username)}}>Create A Lobby</button>
                <form>
                    <label htmlFor="user_name">Lobby Code:</label>
                    <input
                        type="text"
                        id="room_id"
                        name="room_id"
                        onChange={(e) => setLobbyId(e.target.value)}
                    ></input>
                    <button onClick={() => {joinALobby(lobbyId, username)}}>Join</button>
                </form>
            </div>
        </div>
    );
}

