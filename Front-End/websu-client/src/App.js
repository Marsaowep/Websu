import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Game,
  Login,
  Profile,
} from "./components";
import socketClient from "socket.io-client";
const SERVER = "localhost:3000";

export default class App extends Component {
  socket = socketClient(SERVER)
  
  state = {
    profile:{name:"Pos",win:"10",tie:"10",accuracy:"90",top1:"17",top2:"15",top3:"10"},
    globalLeaders: [ {rank:"1", name:"Peter", Score:"20"},
                            {rank:"2", name:"Bob", Score:"17"},
                            {rank:"3", name:"Julia", Score:"10"}]}

  render(){
  return (
    <div className='container'>
      <div className='row'>
        <div className='title col-sm-7'>
          <h2>Websu</h2>
        </div>
        <div className="list-group col-sm-4">
          <Link className="list-group-item algn-item-right" to="/Profile" >Profile</Link>
        </div>
      <div className='row'>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/game" element={<Game globalLeaders={this.state.globalLeaders}/>}  />
          <Route path="/profile" element={<Profile profile={this.state.profile}/>} />
        </Routes>
      </div>
      </div>
    </div>
  );
}
}

