import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_container">
      Form
      <form>
        <label htmlFor="user_name">User Name:</label>
        <input type="text" id="user_name" name="user_name"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"></input>
      </form>
      <Link to="/Game">Game</Link><br></br>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}

export default Login;
