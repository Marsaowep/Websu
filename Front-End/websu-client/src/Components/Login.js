import React from "react";

function Login() {
  return (
    <div class="login_container">
      Form
      <form>
        <label for="user_name">User Name:</label>
        <input type="text" id="user_name" name="user_name"></input>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password"></input>
      </form>
    </div>
  );
}

export default Login;
