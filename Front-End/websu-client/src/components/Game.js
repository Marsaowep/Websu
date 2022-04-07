import React from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";

function Game(){
    return(
        <div classname="game">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-sm-4">
                    <h1>Game</h1>
                  </div>
                  <div class="col-sm-4">
                    <MainMenu></MainMenu>
                  </div>
                  <div class="col-sm-4">
                      <Link to="/Profile">Profile</Link>
                  </div>

        </div>
        </div>
        </div>
    );
}

export default Game;