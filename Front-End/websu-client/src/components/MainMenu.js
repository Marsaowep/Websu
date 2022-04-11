import React, {useEffect} from "react";
import { Link, useNavigate, Route, Router, Routes } from "react-router-dom";
import LobbyMenu from "./LobbyMenu";
import Game from "./Game"



export default function MainMenu(){

    const navigate = useNavigate();
    const singeplayer = () => navigate("/Game");

    const multiplayer = () => navigate("/LobbyMenu");

    return(

        <div className="main_menu_container">
            <h1>this rocks</h1>
            <div className="menu_buttons">
                <button onClick={singeplayer}>Singeplayer</button>
                <button type='button' onClick={multiplayer}>Multiplayer</button>
            </div>

            <div className="main_menu_routes">
                {/* <Router>
                    <Routes>
                        <Route exact path="/" element={<MainMenu />} />
                        <Route
                            path="/Game"
                            element={<Game globalLeaders={this.state.globalLeaders} />}
                        />
                        <Route
                            path="/lobbyMenu"element={<LobbyMenu/>}/>
                    </Routes>
                </Router> */}
            </div>
        </div>
    );
}
