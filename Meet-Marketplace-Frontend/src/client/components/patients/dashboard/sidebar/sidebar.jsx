import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../../redux/slices/userSlice";
import Cookies from "js-cookie";

import IMG01 from "../../../../assets/images/patient.jpg";

export const DashboardSidebar = () => {
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
              <h5>
                <i className="fas fa-email"></i> {email}
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> {location}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={pathname.includes("/dashboard") ? "active" : ""}>
              <Link to="/patient/dashboard">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={pathname.includes("/favourites") ? "active" : ""}>
              <Link to="/patient/favourites">
                <i className="fas fa-bookmark"></i>
                <span>Favourites</span>
              </Link>
            </li>

            <li className={pathname.includes("/profile") ? "active" : ""}>
              <Link to="/patient/profile">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/change-password") ? "active" : ""}
            >
              <Link to="/patient/change-password">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => logoutHandler()}
                className="btn btn-danger-outline logout-btn"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
