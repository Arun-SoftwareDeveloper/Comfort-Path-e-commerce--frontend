// ForgotPasswordForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = ({ onSwitchAuthStep }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Make API request to initiate password reset
      const response = await axios.post(
        "http://localhost:4000/api/forgotPassword",
        {
          email,
        }
      );

      // Handle success, e.g., display success message
      console.log("Password reset email sent");
    } catch (error) {
      // Handle error, e.g., display error message
      console.error("Error initiating password reset:", error);
    }
  };

  return (
    <form className="auth-form">
      {/* ... (other form fields) */}
      <button type="submit" onClick={handleForgotPassword}>
        Reset Password
      </button>
      <p>
        Remember your password?{" "}
        <span onClick={() => onSwitchAuthStep("login")}>Login</span>
      </p>
    </form>
  );
};

export default ForgotPassword;
