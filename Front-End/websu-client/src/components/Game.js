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
  };

  handleClick = (event) => {
    const { target } = event;
    console.log(target.t);
    alert("u clicked " + target.id);
  };

  render() {
    const { globalLeaders } = this.props;

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
                <Target id="01" target={true} />
                <Target id="02" target={true} />
                <Target id="03" target={true} />
                <Target id="04" target={true} />
                <Target id="05" target={true} />
                <Target id="06" target={true} />
                <Target id="07" target={true} />
                <Target id="08" target={true} />
                <Target id="09" target={true} />
                <Target id="010" target={true} />
                <Target id="011" target={true} />
                <Target id="012" target={true} />
              </div>
              <div className="play-row align-items-center">
                <Target id="11" target={true} />
                <Target id="12" target={true} />
                <Target id="13" target={true} />
                <Target id="14" target={true} />
                <Target id="15" target={true} />
                <Target id="16" target={true} />
                <Target id="17" target={true} />
                <Target id="18" target={true} />
                <Target id="19" target={true} />
                <Target id="110" target={true} />
                <Target id="111" target={true} />
                <Target id="112" target={true} />
              </div>
              <div className="play-row align-items-center">
                <Target id="21" target={true} />
                <Target id="22" target={true} />
                <Target id="23" target={true} />
                <Target id="24" target={true} />
                <Target id="25" target={true} />
                <Target id="26" target={true} />
                <Target id="27" target={true} />
                <Target id="28" target={true} />
                <Target id="29" target={true} />
                <Target id="210" target={true} />
                <Target id="211" target={true} />
                <Target id="212" target={true} />
              </div>
              <div className="play-row align-items-center">
                <Target id="31" target={true} />
                <Target id="32" target={true} />
                <Target id="33" target={true} />
                <Target id="34" target={true} />
                <Target id="35" target={true} />
                <Target id="36" target={true} />
                <Target id="37" target={true} />
                <Target id="38" target={true} />
                <Target id="39" target={true} />
                <Target id="310" target={true} />
                <Target id="311" target={true} />
                <Target id="312" target={true} />
              </div>
              <div className="play-row align-items-center">
                <Target id="41" target={true} />
                <Target id="42" target={true} />
                <Target id="43" target={true} />
                <Target id="44" target={true} />
                <Target id="45" target={true} />
                <Target id="46" target={true} />
                <Target id="47" target={true} />
                <Target id="48" target={true} />
                <Target id="49" target={true} />
                <Target id="410" target={true} />
                <Target id="411" target={true} />
                <Target id="412" target={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
