import React from "react";
import Cookies from "js-cookie";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import IMG01 from "../../../assets/images/doctor-thumb-02.jpg";
import { signOut } from "../../../../redux/slices/userSlice";
function DoctorSidebar() {
  const dispatch = useDispatch();
  const router = useHistory();
  const pathname = window.location.pathname;

  const { name, email, profileImage, location } = useSelector(
    (state) => state.user.user
  );

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(signOut());
    router.push("/");
  };

  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <Link to="#0" className="booking-doc-img">
            <img src={profileImage ? profileImage : IMG01} alt="User" />
          </Link>
          <div className="profile-det-info">
            <h3>{name}</h3>

            <div className="patient-details">
              <h5 className="mb-0">{email}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <Nav className="dashboard-menu">
          <Nav.Item>
            <NavLink to="/doctor/doctor-dashboard">
              <i className="fas fa-columns"></i>
              <span>Dashboard</span>
            </NavLink>
          </Nav.Item>

          {/* <Nav.Item> 
                              <NavLink to="/doctor/my-patients">
                                <i className="fas fa-user-injured"></i>
                                        <span>My Customers</span>
                                </NavLink>
                            </Nav.Item>  */}
          <Nav.Item>
            <NavLink to="/doctor/schedule-timing">
              <i className="fas fa-hourglass-start"></i>
              <span>Schedule Timings</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pages/invoice">
              <i className="fas fa-file-invoice"></i>
              <span>Invoices</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/doctor/review">
              <i className="fas fa-star"></i>
              <span>Reviews</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/doctor/chat-doctor">
              <i className="fas fa-comments"></i>
              <span>Message</span>
              <small className="unread-msg">23</small>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/doctor/profile-setting">
              <i className="fas fa-user-cog"></i>
              <span>Profile Settings</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/social-media">
              <i className="fas fa-share-alt"></i>
              <span>Social Media</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/doctor-change-passwword">
              <i className="fas fa-lock"></i>
              <span>Change Password</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <button
              onClick={() => logoutHandler()}
              className="btn btn-danger-outline logout-btn"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
export default DoctorSidebar;
