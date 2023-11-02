import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import ChangePassword from "./changePassword";
import { forgotpassword } from "../../../api";
import Logo from "../../assets/images/logo-white.png";
import SuccessMessage from "../alerts/success";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [action, setAction] = useState(true);
  const [formCheck, setCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const [generatedCode, setCode] = useState("");

  const handleSubmit = async () => {
    if (email) {
      setError("");
      setLoading(true);
      if (action) {
        await forgotpassword(email)
          .then((response) => {
            setMessage(response.data.message);
            setCode(response.data.data);
            setAction(false);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(err.response ? err.response.data.error : err.message);
          });
      } else {
        if (resetCode == generatedCode) {
          setMessage("");
          setCheck(!formCheck);
          setError("");
        } else {
          setLoading(false);
          setError("The code didn't matched");
        }
      }
    } else {
      setError("Email is required");
    }
  };
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={Logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <SuccessMessage success={message} />

                  {error && (
                    <div>
                      <p className="text-center text-danger">{error}</p>
                    </div>
                  )}
                  {formCheck ? (
                    <>
                      <h1>{action ? "Forgot Password?" : "Reset Password"}</h1>
                      <p className="account-subtitle">
                        {action
                          ? "Enter your email to get a password reset link"
                          : "Enter the code sent to your given email"}
                      </p>

                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="d-flex flex-column justify-content-center align-items-center form-group">
                          {action ? (
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          ) : (
                            <input
                              className="form-control w-50"
                              type="text"
                              placeholder="Code"
                              value={resetCode}
                              onChange={(e) => setResetCode(e.target.value)}
                              required
                            />
                          )}
                        </div>
                        <div className="form-group mb-0">
                          <button
                            className="btn btn-primary btn-block"
                            onClick={() => handleSubmit()}
                          >
                            {loading ? (
                              <ClipLoader size={20} color="white" />
                            ) : action ? (
                              "Send Code"
                            ) : (
                              "Reset Password"
                            )}
                          </button>
                        </div>
                      </form>

                      <div className="text-center dont-have">
                        Remember your password? <Link to="/login">Login</Link>
                      </div>
                    </>
                  ) : (
                    <ChangePassword
                      email={email}
                      setError={setError}
                      setMessage={setMessage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
