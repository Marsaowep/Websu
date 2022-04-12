import React, { Component, useState } from "react";
import MainMenu from "./MainMenu";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Leaderboards from "./Leaderboards";
import Target from "./Target";
import { socket } from "../App";

export default function Game() {
  var count = 0;
  const [targets, setTargets] = useState([
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
  ]);
  const [numTarget, setNumTarget] = useState(0);
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState(Infinity);
  const totalTarget = 3;

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const startTimer = (event) => {
    console.log(
      startTime.getHours(),
      startTime.getMinutes(),
      startTime.getTime()
    );
  };
  const click = (c) => {
    if (c === "red") {
      setTarget();
      setNumTarget(numTarget + 1);
    }
    if (numTarget === totalTarget - 1) {
      let endtime = new Date();
      var t = (endtime.getTime() - startTime.getTime()) / 1000;
      if (t < time) {
        setTime(t);
      }

      alert("Great! You have finished!" + t);
      socket.emit("matchScores", {
        room: location.state.lobbyId,
        username: location.state.username,
        score: parseInt(30000 / t),
      });
    }
  };

  socket.on("updateScores", (data) => {
    count++;

    if (count == location.state.players.length) {
      navigate("/EndGame", {
        state: {
          scores: data.scores,
          lobby: location.state.lobbyId,
          players: location.state.players,
          host: location.state.host,
          username: location.state.username,
        },
      });
    }
  });

  const setTarget = (event) => {
    const min = 0;
    const max = 9;
    const rand1 = parseInt(min + Math.random() * (max - min));
    const rand2 = parseInt(min + Math.random() * (max - min));
    console.log("set" + rand1 + rand2);
    const newTargets = targets.map((target) => {
      if (target.xid === rand1 && target.yid === rand2)
        return { xid: target.xid, yid: target.yid, target: true };
      else return { xid: target.xid, yid: target.yid, target: false };
    });
    setTargets(newTargets);
  };

  // const params = useParams();
  // console.log("SKJHFSDJKLHDFHJKLF");
  // console.log(props);
  // const { globalLeaders } = props;

  return (
    <div className="game">
      <div className="container">
        <div className="text-center text-light align-items-center mb-3 d-flex flex-column">
          <div className="gameBoard">
            <h2>
              Target: {numTarget}/{totalTarget} Best Time: {time} s
            </h2>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 0 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="align-items-center">
              {targets.map((target) => {
                return target.xid === 1 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 2 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 3 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 4 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 5 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="align-items-center">
              {targets.map((target) => {
                return target.xid === 6 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 7 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 8 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 9 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
            <div className="play-row align-items-center">
              {targets.map((target) => {
                return target.xid === 10 ? (
                  <Target
                    key={target.xid + "." + target.yid}
                    xid={target.xid}
                    yid={target.yid}
                    target={target.target}
                    click={click}
                  />
                ) : null;
              })}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-4">
            {/* <Leaderboards type="Global" leaders={globalLeaders} />
            <Leaderboards type="Match" leaders={matchLeaders} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
