import React, { useState } from "react";
import "./Signup.css";
import Nav from "../Student/Navbar/Navbar";
import { handleLogin } from "../Auth/Auth"; // Import the authentication functions

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username, password);
    handleLogin(username, password); // Call the handleLogin function from auth.js
  }

  return (
    <div>
      <Nav />
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" /> {/* Change the button type to submit */}
        </form>
        <p className="para-2">
          Don't have an account? <a href="/">Sign Up Here</a>
        </p>
      </div>
    </div>
  );
}
