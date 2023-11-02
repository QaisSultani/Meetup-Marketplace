import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupButton from "../../buttons/AuthButton/signup";
import { SocialAuthButton } from "../../buttons/SocialAuthButtons/buttons";

export default function RegisterForm({ userType, setError, setWarning }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group form-focus">
        <input
          type="text"
          className="form-control floating"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="focus-label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="form-group form-focus">
        <input
          type="email"
          className="form-control floating"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="focus-label">Email</label>
      </div>

      <div className="form-group form-focus mb-5">
        <input
          type="password"
          className="form-control floating"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="focus-label" htmlFor="password">
          Create Password
        </label>
        <p className="password-instruction">
          Note: Password should be 8 characters long with atleast one
          aplhanumeric and special character
        </p>
      </div>
      <div className="text-right">
        <Link to="/login" className="forgot-link">
          Already have an account?
        </Link>
      </div>

      <SignupButton
        userType={userType}
        name={name}
        email={email}
        password={password}
        setError={setError}
        setWarning={setWarning}
      />
      <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
      </div>

      <SocialAuthButton
        setWarning={setWarning}
        setError={setError}
        action="Register"
        userType={userType}
      />
    </form>
  );
}
