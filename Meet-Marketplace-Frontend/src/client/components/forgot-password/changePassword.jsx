import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { resetpassword } from "../../../api/index.js";

function Password({ email, setError, setMessage }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useHistory();

  const handleSubmit = async () => {
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        await resetpassword(email, { password: newPassword })
          .then((response) => {
            setError("");
            setNewPassword("");
            setConfirmPassword("");
            setMessage(response.data.message);
            router.push("/login");
          })
          .catch((err) => {
            setError(err.response.data.error);
          });
      } else {
        setError("Confirm Password didn't match");
      }
    } else {
      setError("Fill out both fields");
    }
  };
  return (
    <div>
      <h1>Change Password</h1>
      <p className="account-subtitle">Enter your new password</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="submit-section">
          <button
            className="btn btn-primary submit-btn"
            onClick={() => handleSubmit()}
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default Password;
