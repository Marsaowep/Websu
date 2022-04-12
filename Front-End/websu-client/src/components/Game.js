import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Link, useLocation } from "react-router-dom";
import Leaderboards from "./Leaderboards";
import Target from "./Target";
import { socket } from "../App";

export default class Game extends Component {
  state = {
    matchLeaders: [
      { rank: "1", name: "Peter", score: "20" },
      { rank: "2", name: "Bob", score: "17" },
      { rank: "3", name: "Julia", score: "10" },
    ],
    targets: [
      { xid: 0, yid: 0, target: false },
      { xid: 0, yid: 1, target: false },
      { xid: 0, yid: 2, target: false },
      { xid: 0, yid: 3, target: false },
      { xid: 0, yid: 4, target: false },
      { xid: 0, yid: 5, target: false },
      { xid: 0, yid: 6, target: false },
      { xid: 0, yid: 7, target: false },
      { xid: 0, yid: 8, target: false },
      { xid: 0, yid: 9, target: false },
      { xid: 1, yid: 0, target: false },
      { xid: 1, yid: 1, target: false },
      { xid: 1, yid: 2, target: false },
      { xid: 1, yid: 3, target: false },
      { xid: 1, yid: 4, target: false },
      { xid: 1, yid: 5, target: false },
      { xid: 1, yid: 6, target: false },
      { xid: 1, yid: 7, target: false },
      { xid: 1, yid: 8, target: false },
      { xid: 1, yid: 9, target: false },
      { xid: 2, yid: 0, target: false },
      { xid: 2, yid: 1, target: false },
      { xid: 2, yid: 2, target: false },
      { xid: 2, yid: 3, target: false },
      { xid: 2, yid: 4, target: false },
      { xid: 2, yid: 5, target: false },
      { xid: 2, yid: 6, target: false },
      { xid: 2, yid: 7, target: false },
      { xid: 2, yid: 8, target: false },
      { xid: 2, yid: 9, target: false },
      { xid: 3, yid: 0, target: false },
      { xid: 3, yid: 1, target: false },
      { xid: 3, yid: 2, target: false },
      { xid: 3, yid: 3, target: false },
      { xid: 3, yid: 4, target: false },
      { xid: 3, yid: 5, target: false },
      { xid: 3, yid: 6, target: false },
      { xid: 3, yid: 7, target: false },
      { xid: 3, yid: 8, target: false },
      { xid: 3, yid: 9, target: false },
      { xid: 4, yid: 0, target: false },
      { xid: 4, yid: 1, target: false },
      { xid: 4, yid: 2, target: false },
      { xid: 4, yid: 3, target: false },
      { xid: 4, yid: 4, target: false },
      { xid: 4, yid: 5, target: false },
      { xid: 4, yid: 6, target: true },
      { xid: 4, yid: 7, target: false },
      { xid: 4, yid: 8, target: false },
      { xid: 4, yid: 9, target: false },
      { xid: 5, yid: 0, target: false },
      { xid: 5, yid: 1, target: false },
      { xid: 5, yid: 2, target: false },
      { xid: 5, yid: 3, target: false },
      { xid: 5, yid: 4, target: false },
      { xid: 5, yid: 5, target: false },
      { xid: 5, yid: 6, target: false },
      { xid: 5, yid: 7, target: false },
      { xid: 5, yid: 8, target: false },
      { xid: 5, yid: 9, target: false },
      { xid: 6, yid: 0, target: false },
      { xid: 6, yid: 1, target: false },
      { xid: 6, yid: 2, target: false },
      { xid: 6, yid: 3, target: false },
      { xid: 6, yid: 4, target: false },
      { xid: 6, yid: 5, target: false },
      { xid: 6, yid: 6, target: false },
      { xid: 6, yid: 7, target: false },
      { xid: 6, yid: 8, target: false },
      { xid: 6, yid: 9, target: false },
      { xid: 7, yid: 0, target: false },
      { xid: 7, yid: 1, target: false },
      { xid: 7, yid: 2, target: false },
      { xid: 7, yid: 3, target: false },
      { xid: 7, yid: 4, target: false },
      { xid: 7, yid: 5, target: false },
      { xid: 7, yid: 6, target: false },
      { xid: 7, yid: 7, target: false },
      { xid: 7, yid: 8, target: false },
      { xid: 7, yid: 9, target: false },
      { xid: 8, yid: 0, target: false },
      { xid: 8, yid: 1, target: false },
      { xid: 8, yid: 2, target: false },
      { xid: 8, yid: 3, target: false },
      { xid: 8, yid: 4, target: false },
      { xid: 8, yid: 5, target: false },
      { xid: 8, yid: 6, target: false },
      { xid: 8, yid: 7, target: false },
      { xid: 8, yid: 8, target: false },
      { xid: 8, yid: 9, target: false },
      { xid: 9, yid: 0, target: false },
      { xid: 9, yid: 1, target: false },
      { xid: 9, yid: 2, target: false },
      { xid: 9, yid: 3, target: false },
      { xid: 9, yid: 4, target: false },
      { xid: 9, yid: 5, target: false },
      { xid: 9, yid: 6, target: false },
      { xid: 9, yid: 7, target: false },
      { xid: 9, yid: 8, target: false },
      { xid: 9, yid: 9, target: false },
    ],
    numTarget: 0,
    startTime: new Date(),
    time: Infinity,
    totalTarget: 30,
  };

  startTimer = (event) => {
    console.log(
      this.state.startTime.getHours(),
      this.state.startTime.getMinutes(),
      this.state.startTime.getTime()
    );
  };
  click = (c) => {
    if (c === "red") {
      this.setTarget();
      this.setState({ numTarget: this.state.numTarget + 1 });
    }
    if (this.state.numTarget === this.state.totalTarget - 1) {
      let endtime = new Date();
      var t = (endtime.getTime() - this.state.startTime.getTime()) / 1000;
      if (t < this.state.time) {
        this.setState({ time: t });
      }

      alert("Great! You have finished!" + t);

      // socket.emit("matchScores", {
      //   room: location.state.lobbyId,
      //   username: location.state.username,
      //   score: 3000 / t,
      // });
    }
  };

  setTarget = (event) => {
    const min = 0;
    const max = 9;
    const rand1 = parseInt(min + Math.random() * (max - min));
    const rand2 = parseInt(min + Math.random() * (max - min));
    console.log("set" + rand1 + rand2);
    const newTargets = this.state.targets.map((target) => {
      if (target.xid === rand1 && target.yid === rand2)
        return { xid: target.xid, yid: target.yid, target: true };
      else return { xid: target.xid, yid: target.yid, target: false };
    });
    this.setState({ targets: newTargets });
  };

  render() {
    const { globalLeaders } = this.props;
    console.log(this.state);
    console.log(this);
    return (
      <div className="game">
        <div className="container">
          <div className="text-center text-light align-items-center mb-3 d-flex flex-column">
            <div className="gameBoard">
              <h2>
                Target: {this.state.numTarget}/{this.state.totalTarget} Best
                Time: {this.state.time} s
              </h2>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 0 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 1 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 2 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 3 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 4 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 5 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 6 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 7 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 8 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 9 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
              <div className="play-row align-items-center">
                {this.state.targets.map((target) => {
                  return target.xid === 10 ? (
                    <Target
                      key={target.xid + "." + target.yid}
                      xid={target.xid}
                      yid={target.yid}
                      target={target.target}
                      click={this.click}
                    />
                  ) : null;
                })}
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-4">
              <Leaderboards type="Global" leaders={globalLeaders} />
              <Leaderboards type="Match" leaders={this.state.matchLeaders} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
