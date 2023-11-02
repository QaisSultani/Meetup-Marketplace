import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MentorRegisterForm({ name, email, password }) {
  return (
    <form action="/doctor/doctor-dashboard">
      <div className="form-group form-focus">
        <input type="text" className="form-control floating" />
        <label className="focus-label">Name</label>
      </div>
      <div className="form-group form-focus">
        <input type="email" className="form-control floating" />
        <label className="focus-label">Email</label>
      </div>
      <div className="form-group form-focus">
        <input type="text" className="form-control floating" />
        <label className="focus-label">Mobile Number</label>
      </div>
      <div className="form-group form-focus">
        <input type="password" className="form-control floating" />
        <label className="focus-label">Create Password</label>
      </div>
      <div className="text-right">
        <Link to="/login" className="forgot-link">
          Already have an account?
        </Link>
      </div>
      <button
        className="btn btn-primary btn-block btn-lg login-btn"
        type="submit"
      >
        Signup
      </button>
      <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
      </div>
      <div className="row form-row social-login">
        <div className="col-6">
          <a href="#0" className="btn btn-facebook btn-block">
            <i className="fab fa-facebook-f mr-1"></i> Login
          </a>
        </div>
        <div className="col-6">
          <a href="#0" className="btn btn-google btn-block">
            <i className="fab fa-google mr-1"></i> Login
          </a>
        </div>
      </div>
    </form>
  );
}
