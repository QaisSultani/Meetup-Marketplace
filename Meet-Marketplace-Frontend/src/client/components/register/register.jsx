import React, { useState, useEffect } from "react";

import ErrorMessage from "../alerts/error";
import Logo from "../../assets/images/logo-white.png";
import RegisterForm from "../forms/Register/register";
import WarningMessage from "../alerts/warning";

function Register() {
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const [isMentor, setIsMentor] = useState(false);

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => {
      document.body.classList.remove("account-page");
    };
  }, []);

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <ErrorMessage error={error} />
        <WarningMessage warning={warning} />
        <div className="container">
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <div className="login-header d-flex justify-content-between">
                  <h3>{!isMentor ? "Customer Register" : "Mentor Register"}</h3>
                  <button
                    className="register-usertype-btn text-right"
                    to="/doctor/doctor-register"
                    onClick={() => setIsMentor(!isMentor)}
                  >
                    {!isMentor ? "Signup as Mentor?" : "Customer Register?"}
                  </button>
                </div>

                <RegisterForm
                  setError={setError}
                  userType={isMentor ? "mentor" : "mentee"}
                  setWarning={setWarning}
                />
              </div>
            </div>
            <div className="login-left">
              <img className="img-fluid" src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
