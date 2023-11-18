// ForgotPasswordForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../BackendServerApi";

const ForgotPassword = ({ onSwitchAuthStep }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Make API request to initiate password reset
      const response = await axios.post(`${backendApi}/forgotPassword`, {
        email,
      });

      // Handle success, e.g., display success message
      toast.success("Password reset email sent", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error initiating password reset. Please try again.", {
        position: "top-right",
      });
      console.error("Error initiating password reset:", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleForgotPassword}>
          Reset Password
        </button>
        <p>
          Remember your password?{" "}
          <Link to="/login">
            {" "}
            <span onClick={() => onSwitchAuthStep("login")}>Login</span>
          </Link>
        </p>

        {/* Toast Container */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default ForgotPassword;
