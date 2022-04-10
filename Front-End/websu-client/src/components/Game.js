import React from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";
import GlobalLeaderboards from "./GlobalLeaderboards";
import MatchLeaderboards from "./MatchLeaderboards";

function Game(){
    return(
        <div className="game">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-4">
                    <GlobalLeaderboards/>
                    <MatchLeaderboards/>
                    <h1>Game</h1>
                  </div>
                  <div className="col-sm-4">
                    <MainMenu/>
                  </div>
                  <div className="col-sm-4">
                      <Link to="/Profile">Profile</Link>
                  </div>

        </div>
        </div>
        </div>
    );
}

export default Game;