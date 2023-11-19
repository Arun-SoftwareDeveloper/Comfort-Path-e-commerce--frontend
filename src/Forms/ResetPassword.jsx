// ResetPasswordForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../BackendServerApi";

const ResetPasswordForm = ({ onSwitchAuthStep, resetToken }) => {
  const [password, setPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Make API request to reset password
      const response = await axios.post(`${backendApi}/resetPassword`, {
        password,
        resetToken, // Pass the reset token in the request
      });

      // Handle success, e.g., display success message
      toast.success("Password reset successful", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error resetting password. Please try again.", {
        position: "top-right",
      });
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleResetPassword}>
          Reset Password
        </button>
        <p>
          Remember your password?{" "}
          <span onClick={() => onSwitchAuthStep("login")}>Login</span>
        </p>

        {/* Toast Container */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default ResetPasswordForm;
