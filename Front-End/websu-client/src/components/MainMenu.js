import React, {useEffect} from "react";
import { Link, useNavigate, Route, Router, Routes, useLocation } from "react-router-dom";
import LobbyMenu from "./LobbyMenu";
import Game from "./Game"



export default function MainMenu(props){

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const singeplayer = () => navigate("/Game", {state: location.state});

    const multiplayer = () => navigate("/LobbyMenu", {state: location.state});

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
