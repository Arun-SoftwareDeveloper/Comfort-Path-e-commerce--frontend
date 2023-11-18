import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormsStyles/Register.css";
import { Link } from "react-router-dom";

const Register = ({ onSwitchAuthStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Make API request to register
      const response = await axios.post("http://localhost:4000/register", {
        firstName,
        lastName,
        email,
        password,
      });

      // Handle success with toast notification
      toast.success("Registration successful", { position: "top-right" });
    } catch (error) {
      // Handle error with toast notification
      toast.error("Error registering. Please try again.", {
        position: "top-right",
      });
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
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
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            {" "}
            <span onClick={() => onSwitchAuthStep("login")}>Login</span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
