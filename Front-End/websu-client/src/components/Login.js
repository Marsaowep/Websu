import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function registerUser(credentials) {
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
  let navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    console.log("E IS THIS: ", e);
    const response = await loginUser({
      username,
      password,
    });

    console.log("response:", response);
    console.log(response.response);
    if (response.response) {
      navigate("/MainMenu", {});
    } else {
      window.alert("User Already Exists!");
    }
  };

  const handleSubmitLogin = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    window.alert("Logging in!");

    // console.log("E IS THIS: ", e);
    // const response = await loginUser({
    //   username,
    //   password,
    // });

    // console.log("response:", response);
    // console.log(response.response);
    // if (response.response) {
    //   navigate("/game", {});
    // } else {
    //   window.alert("User Already Exists!");
    // }
  };

  return (
    <div className="login_container">
      Form
      <form onSubmit={handleSubmitRegister}>
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
        <button onClick={handleSubmitLogin}>Login</button>
        <input type="submit" value="Register"></input>
      </form>
      <Link to="/MainMenu">MainMenu</Link>
      <br></br>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}

export default Login;
