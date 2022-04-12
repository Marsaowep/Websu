import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Game, Login, Profile } from "./components";
import socketClient from "socket.io-client";
const SERVER = "localhost:3000";

export default class App extends Component {
  socket = socketClient(SERVER);

  state = {
    profile: {
      name: "Pos",
      win: "10",
      tie: "10",
      accuracy: "90",
      top1: "17",
      top2: "15",
      top3: "10",
    },
    globalLeaders: [
      { rank: "1", name: "Pos", score: "20" },
      { rank: "2", name: "Pop", score: "17" },
      { rank: "3", name: "Lisa", score: "10" },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center text-light mt-5">
            <h1>Websu</h1>
          </div>
          <div className="row">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route
                path="/game"
                element={<Game globalLeaders={this.state.globalLeaders} />}
              />
              <Route
                path="/profile"
                element={<Profile profile={this.state.profile} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
