import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";
import Leaderboards from "./Leaderboards";
import Target from "./Target";

export default class Game extends Component {
  state = {
    matchLeaders: [
      { rank: "1", name: "Peter", score: "20" },
      { rank: "2", name: "Bob", score: "17" },
      { rank: "3", name: "Julia", score: "10" },
    ],
    targets: [{xid:0,yid:0,target:false},
      {xid:0,yid:1,target:false},
      {xid:0,yid:2,target:false},
      {xid:0,yid:3,target:false},
      {xid:0,yid:4,target:false},
      {xid:0,yid:5,target:false},
      {xid:0,yid:6,target:false},
      {xid:0,yid:7,target:false},
      {xid:0,yid:8,target:false},
      {xid:0,yid:9,target:false},
      {xid:0,yid:10,target:false},
      {xid:1,yid:0,target:false},
      {xid:1,yid:1,target:false},
      {xid:1,yid:2,target:false},
      {xid:1,yid:3,target:false},
      {xid:1,yid:4,target:false},
      {xid:1,yid:5,target:false},
      {xid:1,yid:6,target:false},
      {xid:1,yid:7,target:false},
      {xid:1,yid:8,target:false},
      {xid:1,yid:9,target:false},
      {xid:1,yid:10,target:false},
      {xid:2,yid:0,target:false},
      {xid:2,yid:1,target:false},
      {xid:2,yid:2,target:false},
      {xid:2,yid:3,target:false},
      {xid:2,yid:4,target:false},
      {xid:2,yid:5,target:false},
      {xid:2,yid:6,target:false},
      {xid:2,yid:7,target:false},
      {xid:2,yid:8,target:false},
      {xid:2,yid:9,target:false},
      {xid:2,yid:10,target:false},
      {xid:3,yid:0,target:false},
      {xid:3,yid:1,target:false},
      {xid:3,yid:2,target:false},
      {xid:3,yid:3,target:false},
      {xid:3,yid:4,target:false},
      {xid:3,yid:5,target:false},
      {xid:3,yid:6,target:false},
      {xid:3,yid:7,target:false},
      {xid:3,yid:8,target:false},
      {xid:3,yid:9,target:false},
      {xid:3,yid:10,target:false},
      {xid:4,yid:0,target:false},
      {xid:4,yid:1,target:false},
      {xid:4,yid:2,target:false},
      {xid:4,yid:3,target:false},
      {xid:4,yid:4,target:false},
      {xid:4,yid:5,target:false},
      {xid:4,yid:6,target:true},
      {xid:4,yid:7,target:false},
      {xid:4,yid:8,target:false},
      {xid:4,yid:9,target:false},
      {xid:4,yid:10,target:false}  
    ],
    color: "blue"
  };


  click=(c)=>{
    this.setState({color:c})
    console.log("Game know u clicked"+this.state.color)
  }

  setTarget=(event)=>{
    const min = 0;
    const max = 4;
    const rand1 = parseInt(min + Math.random() * (max - min));
    const rand2 = parseInt(min + Math.random() * (max - min));
    console.log("set"+rand1+rand2)
    const newTargets=this.state.targets.map(target=>{
      if(target.xid===rand1 && target.yid===rand2) return {xid:target.xid, yid:target.yid,target:true}
      else return {xid:target.xid, yid:target.yid,target:false}
    })
    this.setState({targets:newTargets})
  }

  render() {
    const { globalLeaders } = this.props
    return (
      <div className="game">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4">
              <Leaderboards type="Global" leaders={globalLeaders} />
              <Leaderboards type="Match" leaders={this.state.matchLeaders} />
            </div>
            <div className="col-sm-4">
              <MainMenu />
            </div>
          </div>
          <div className="row bg-warning">
            <h1>Game</h1>
            <div>
              <div className="play-row align-items-center">
              {
                   this.state.targets.map( target =>{
                   return target.xid === 0 ? <Target key={target.xid+"."+target.yid} xid={target.xid} yid={target.yid} target={target.target} click={this.click} /> : null})
                }
              </div>
              <div className="align-items-center">
                {
                   this.state.targets.map( target =>{
                   return target.xid === 1 ? <Target key={target.xid+"."+target.yid} xid={target.xid} yid={target.yid} target={target.target} click={this.click} /> : null})
                }
              </div>
              <div className="play-row align-items-center">
                {
                   this.state.targets.map( target =>{
                   return target.xid === 2 ? <Target key={target.xid+"."+target.yid} xid={target.xid} yid={target.yid} target={target.target} click={this.click} /> : null})
                }
              </div>
              <div className="play-row align-items-center">
                {
                   this.state.targets.map( target =>{
                   return target.xid === 3 ? <Target key={target.xid+"."+target.yid} xid={target.xid} yid={target.yid} target={target.target} click={this.click} /> : null})
                }
              </div>
              <div className="play-row align-items-center">
                {
                   this.state.targets.map( target =>{
                   return target.xid === 4 ? <Target key={target.xid+"."+target.yid} xid={target.xid} yid={target.yid} target={target.target} click={this.click} /> : null})
                }
              </div>
              //<button className="button" onClick={this.setTarget}>Set Target</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
