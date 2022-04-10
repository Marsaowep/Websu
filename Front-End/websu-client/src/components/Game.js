import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Link} from "react-router-dom";
import Leaderboards from "./Leaderboards";

export default class Game extends Component{
  state = {matchLeaders:[{rank:"1", name:"Peter", Score:"20"},
  {rank:"2", name:"Bob", Score:"17"},
  {rank:"3", name:"Julia", Score:"10"}]}

  
  render(){
    
    const {globalLeaders}=this.props
  
    return(
        <div className="game">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-4">
                    <Leaderboards leaders={globalLeaders}/>
                    <Leaderboards leaders={this.state.matchLeaders}/>
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
}
