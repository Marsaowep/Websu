import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Game,
  Login,
  Profile,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();