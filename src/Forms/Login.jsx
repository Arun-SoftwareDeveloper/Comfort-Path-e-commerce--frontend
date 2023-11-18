// LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormsStyles/Login.css";

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

      // Display success toast
      // toast.success("Login successful", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error logging in. Please try again.", {
        position: "top-right",
      });
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
      <p>
        Create New Account?<Link to="/register">Register</Link>
      </p>
      <Link to="/forgotPassword">
        {" "}
        <p>Forgot Password?</p>
      </Link>

      {/* Toast Container */}
      <ToastContainer />
    </form>
  );
};

export default Login;
