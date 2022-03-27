import React from "react";
import ReactDOM from "react-DOM";
import logo from "./logo.svg";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Game,
  GlobalLeaderboards,
  JoinLobby,
  LobbyMenu,
  Login,
  MainMenu,
  MatchLeaderboards,
  Profile,
} from "./components";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Game />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

export default App;
