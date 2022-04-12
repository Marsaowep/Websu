import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LobbyMenu from "./LobbyMenu";
import Game from "./Game";

export default function MainMenu(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const singeplayer = () => navigate("/Game", { state:{ location: location.state, single: true }});

  const multiplayer = () => navigate("/LobbyMenu", { state: location.state });

  return (
    <div className="main_menu_container pagination-centered">
      <div className="text-center text-light align-items-center mb-3 d-flex flex-column ">
        <div className="menu_buttons d-flex flex-column w-50">
          <button className="mt-5 mb-5" onClick={singeplayer}>
            Single Player
          </button>
          <button type="button" onClick={multiplayer}>
            Multiplayer
          </button>
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
    </div>
  );
}
