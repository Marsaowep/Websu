import React from "react";
import { Link, Navigate, useNavigate, Route, Router, Routes } from "react-router-dom";
import LobbyMenu from "./LobbyMenu";
import Game from "./Game"



function MainMenu(){
    let navigate = useNavigate();

    return(

        <div className="main_menu_container">
            <h1>this rocks</h1>
            <div className="menu_buttons">
                <Link to="/LobbyMenu">LobbyMenu</Link>
                <button type='button' onClick={navigate("/Game")}>Singeplayer</button>
                <button type='button' onClick={navigate("/lobbyMenu")}>Multiplayer</button>
            </div>

            <div className="main_menu_routes">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<MainMenu />} />
                        <Route
                            path="/Game"
                            element={<Game globalLeaders={this.state.globalLeaders} />}
                        />
                        <Route
                            path="/lobbyMenu"element={<LobbyMenu/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default MainMenu;