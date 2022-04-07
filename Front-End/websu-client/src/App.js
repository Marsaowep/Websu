import React from 'react';
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Game,
  Login,
  Profile,
} from "./components";
import socketClient from "socket.io-client";
const SERVER = "localhost:4000";

function App() {
  var socket = socketClient(SERVER);
  


  return (
    <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </Router>

    </div>
  );
}

export default App;
