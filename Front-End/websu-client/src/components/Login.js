import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });

    console.log("response:");
    console.log(response);
  };

  return (
    <div className="login_container">
      Form
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">User Name:</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Login"></input>
      </form>
      <Link to="/Game">Game</Link>
      <br></br>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}

export default Login;
