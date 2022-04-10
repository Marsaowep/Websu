import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Link} from "react-router-dom";
import Leaderboards from "./Leaderboards";

export default class Game extends Component{
  state = {matchLeaders:[{rank:"1", name:"Peter", score:"20"},
  {rank:"2", name:"Bob", score:"17"},
  {rank:"3", name:"Julia", score:"10"}]}

  
  render(){
    
    const {globalLeaders}=this.props
  
    return(
        <div className="game">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-4">
                    <Leaderboards type="Global" leaders={globalLeaders}/>
                    <Leaderboards type="Match" leaders={this.state.matchLeaders}/>
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
