import React from "react";
import { Link, Navigate, useNavigate, Route, Router, Routes } from "react-router-dom";
import LobbyMenu from "./LobbyMenu";
import Game from "./Game"



export default class MainMenu extends React.component{
    


    render(){
        return(

            <div className="main_menu_container">
                <h1>this rocks</h1>
                <div className="menu_buttons">
                    <button type='button' onClick={Navigate("/Game")}>Singeplayer</button>
                    <button type='button' onClick={Navigate("/LobbyMenu")}>Multiplayer</button>
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
}
