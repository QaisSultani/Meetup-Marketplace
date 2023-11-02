import React, { useState } from "react";
import StickyBox from "react-sticky-box";

import { changepassword } from "../../../../../api/index.js";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import SuccessMessage from "../../../alerts/success.js";

function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        await changepassword({ oldPassword, newPassword })
          .then((response) => {
            setError("");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setMessage(response.data.message);
          })
          .catch((err) => {
            setError(err.response.data.error);
          });
      } else {
        setError("Confirm Password didn't match");
      }
    } else {
      setError("Fill out all fields");
    }
  };
  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Profile Settings
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Profile Settings</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <SuccessMessage success={message} />

                  {error && (
                    <div>
                      <p className="text-danger">{error}</p>
                    </div>
                  )}
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <label>Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
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
                        type="submit"
                        className="btn btn-primary submit-btn"
                        onClick={() => handleSubmit()}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Password;
