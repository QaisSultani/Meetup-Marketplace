import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

import { adminSignIn } from "../../../redux/slices/userSlice";
import ErrorMessage from "../../components/alerts/error";
import Logo from "../../assets/images/logo-white.png";
import { signin } from "../../../api";

function Login() {
  const router = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const authenticateAdmin = async () => {
    setLoading(true);
    await signin({ email, password })
      .then((response) => {
        setError("");
        setLoading(false);

        dispatch(adminSignIn());
        router.push("/admin");
      })
      .catch((err) => {
        setError(err.response ? err.response.data.error : err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-right">
                <ErrorMessage error={error} />
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to admin dashboard</p>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        onClick={() => authenticateAdmin()}
                      >
                        {loading ? <ClipLoader color="white" /> : "Login"}
                      </button>
                    </div>
                  </form>

                  <div className="text-center forgotpass">
                    <Link to="/admin/forgotPassword">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div className="login-left">
                <img className="img-fluid" src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
