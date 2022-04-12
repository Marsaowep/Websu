import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

async function registerUser(credentials) {
  return fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

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
  let navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    console.log("E IS THIS: ", e);
    const response = await registerUser({
      username,
      password,
    });

    console.log("response:", response);
    console.log(response.response);

    if (response.response) {
      console.log("Register Successful!");
      navigate("/MainMenu", { state: { username: response.response.name } });
    } else {
      window.alert("User Already Exists!");
    }
  };

  const handleSubmitLogin = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();

    const response = await loginUser({
      username,
      password,
    });

    console.log("login response: ", response);
    console.log(response.response);
    console.log(response.name);
    if (response.response) {
      navigate("/MainMenu", { state: { username: response.response.name } });
    } else {
      window.alert("Incorrect Credentials");
    }

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
      <form onSubmit={handleSubmitRegister}>
        <div className="text-center mb-4 text-white">
          <label htmlFor="user_name">Username</label>
          <div className="usernameInput">
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text-center mb-4 text-white">
          <label htmlFor="password">Password</label>
          <div className="passwordInput">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text-center mt-5 mb-5">
          <button onClick={handleSubmitLogin} id="login">
            Login
          </button>
        </div>
        <div className="text-center mb-3">
          <input type="submit" value="Register" id="register"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
