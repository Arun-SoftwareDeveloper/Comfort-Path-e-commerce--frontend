// ResetPasswordForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ResetPassword = ({ onSwitchAuthStep, resetToken }) => {
  const [password, setPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Make API request to reset password
      const response = await axios.post(
        "http://localhost:4000/api/resetPassword",
        {
          token: resetToken,
          password,
        }
      );

      // Handle success, e.g., display success message
      console.log("Password reset successful");
    } catch (error) {
      // Handle error, e.g., display error message
      console.error("Error resetting password:", error);
    }
  };

  return (
    <form className="auth-form">
      {/* ... (other form fields) */}
      <button type="submit" onClick={handleResetPassword}>
        Reset Password
      </button>
      <p>
        Remember your password?{" "}
        <span onClick={() => onSwitchAuthStep("login")}>Login</span>
      </p>
    </form>
  );
};

export default ResetPassword;
