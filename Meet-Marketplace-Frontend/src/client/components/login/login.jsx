import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo-white.png";

import AuthButton from "../buttons/AuthButton/login";
import { SocialAuthButton } from "../buttons/SocialAuthButtons/buttons";
import ErrorMessage from "../alerts/error";
import WarningMessage from "../alerts/warning";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => {
      document.body.classList.remove("account-page");
    };
  }, []);

  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <ErrorMessage error={error} />
          <WarningMessage warning={warning} />
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={Logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to your dashboard</p>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(text) => setEmail(text.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(text) => setPassword(text.target.value)}
                      />
                    </div>
                    <AuthButton
                      email={email}
                      password={password}
                      setError={setError}
                      setWarning={setWarning}
                    />
                  </form>

                  <div className="text-center forgotpass">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  <SocialAuthButton
                    action="Login"
                    setError={setError}
                    setWarning={setWarning}
                  />

                  <div className="text-center dont-have">
                    Don’t have an account?
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
