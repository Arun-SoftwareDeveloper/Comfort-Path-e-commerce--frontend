// LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make API request to login
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      // Handle success, store token in localStorage
      const { token } = response.data;
      onLogin(token);
      console.log(token);

      console.log("Login successful");
    } catch (error) {
      // Handle error, e.g., display error message
      console.error("Error logging in:", error);
    }
  };

  return (
    <form className="auth-form">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
