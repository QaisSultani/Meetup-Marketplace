import Dropdown from "react-bootstrap/Dropdown";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { signOut } from "../../redux/slices/userSlice";
import logo from "../assets/images/logo.png";
import Cookies from "js-cookie";

const Header = (props) => {
  let pathnames = window.location.pathname;
  const isMenteeLoggedIn = useSelector((state) => state.isMenteeLoggedIn);
  const isMentorLoggedIn = useSelector((state) => state.isMentorLoggedIn);
  const router = useHistory();
  const dispatch = useDispatch();

  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(signOut());
    router.push("/");
  };

  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });
  }, []);

  const exclusionArray = ["/login", "/register", "/forgot-password"];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {pathnames.includes("homeslider1") && (
        <div className="header-top">
          <div className="left-top ">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt top-icon" />
                123, washington street, uk
              </li>
              <li>
                <i className="fas fa-phone-volume top-icon" />
                +19 123-456-7890
              </li>
              <li>
                <i className="fas fa-envelope top-icon" />
                mail@yourdomain.com
              </li>
            </ul>
          </div>
          <div className="right-top ">
            <ul>
              <li>
                <i className="fab fa-facebook-f top-icons" />
              </li>
              <li>
                <i className="fab fa-instagram top-icons" />
              </li>
              <li>
                <i className="fab fa-linkedin-in top-icons" />
              </li>
              <li>
                <i className="fab fa-twitter top-icons" />
              </li>
            </ul>
          </div>
        </div>
      )}

      <header className="header">
        <nav
          className={`navbar navbar-expand-lg header-nav ${
            pathnames.includes("home1") ? "nav-transparent" : ""
          }`}
        >
          <div className="navbar-header">
            <Link to="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            <Link to="/home" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/home" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link
                to="#0"
                id="menu_close"
                className="menu-close"
                onClick={() => onhandleCloseMenu()}
              >
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
              <li className={`${pathnames === "/" ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </li>

              {!isMenteeLoggedIn && (
                <>
                  <li
                    className={`has-submenu ${
                      url.includes("/doctor") ? "active" : ""
                    }`}
                  >
                    <Link to="#0">
                      Mentors
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </Link>
                    <ul className={`submenu`}>
                      <li
                        className={
                          pathnames.includes("doctor-dashboard") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/doctor-dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentors Dashboard
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("appointments") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/appointments"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Appointments
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("schedule-timing") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/schedule-timing"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Schedule Timing
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("my-patients") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/my-patients"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Customers List
                        </Link>
                      </li>

                      <li
                        className={
                          pathnames.includes("chat-doctor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/chat-doctor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("invoice") ? "active" : ""
                        }
                      >
                        <Link
                          to="/pages/invoice"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Invoices
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile-setting") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/profile-setting"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        className={pathnames.includes("review") ? "active" : ""}
                      >
                        <Link
                          to="/doctor/review"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Reviews
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("doctor-register") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/doctor-register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentor Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              {!isMentorLoggedIn && (
                <>
                  <li
                    className={`has-submenu ${
                      url.includes("/patient") ? "active" : ""
                    }`}
                  >
                    <Link to="#0">
                      Customers
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </Link>
                    <ul className={`submenu`}>
                      <li
                        className={
                          pathnames.includes("dashboard") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Dashboard
                        </Link>

                        <Link
                          to="/patient/reviewMentor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          ReviewMentor
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("search-doctor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/search-doctor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Search Mentors
                        </Link>
                      </li>

                      <li
                        className={
                          pathnames.includes("booking") &&
                          !pathnames.includes("booking-success")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/patient/booking"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Bookings
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("favourites") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/favourites"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Favourites
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("patient-chat") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/patient-chat"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile") &&
                          !pathnames.includes("doctor-profile")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/patient/profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>

                      <li
                        className={
                          pathnames.includes("register") ? "active" : ""
                        }
                      >
                        <Link
                          to="/register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li
                className={`has-submenu ${
                  url.includes("/pages") ? "active" : ""
                }`}
              >
                <a href="#0">
                  Pages
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </a>
                <ul className={`submenu`}>
                  <li
                    className={`${
                      pathnames.includes("/voice-call") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/pages/voice-call"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Voice Call
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathnames.includes("/video-call") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/pages/video-call"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Video Call
                    </Link>
                  </li>

                  <li
                    className={`${
                      pathnames.includes("/calendar") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/pages/calendar"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Calendar
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathnames.includes("/component") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/pages/component"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Components
                    </Link>
                  </li>

                  <li
                    className={`has-submenu ${
                      pathnames.includes("/invoice-view") ? "active" : ""
                    }`}
                  >
                    <a href="#0">Invoices</a>
                    <ul className="submenu">
                      <li
                        className={
                          pathnames.includes("invoice") ? "active" : ""
                        }
                      >
                        <Link
                          to="/pages/invoice"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Invoices
                        </Link>
                      </li>
                      <li
                        className={pathnames.includes("-view") ? "active" : ""}
                      >
                        <Link
                          to="/pages/invoice-view"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Invoice View
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${
                      pathnames.includes("/blank-page") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/pages/blank-page"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Starter Page
                    </Link>
                  </li>

                  <li className={pathnames.includes("login") ? "active" : ""}>
                    <Link to="/login" onClick={() => onhandleCloseMenu()}>
                      Login
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("/register") ? "active" : ""}
                  >
                    <Link to="/register" onClick={() => onhandleCloseMenu()}>
                      Register
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathnames === "/forgot-password" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/forgot-password"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`has-submenu ${
                  url.includes("/blog") ? "active" : ""
                }`}
              >
                <Link to="">
                  Blog<i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="submenu">
                  <li
                    className={pathnames.includes("blog-list") ? "active" : ""}
                  >
                    <Link
                      to="/blog/blog-list"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Blog List
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("blog-grid") ? "active" : ""}
                  >
                    <Link
                      to="/blog/blog-grid"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Blog Grid
                    </Link>
                  </li>
                  <li
                    className={
                      pathnames.includes("blog-details") ? "active" : ""
                    }
                  >
                    <Link
                      to="/blog/blog-details"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li>
                    <Link
                      to={`${config.publicPath}/admin`}
                      target="_blank"
                      to="/admin"
                    >
                      Admin
                    </Link>
                  </li> */}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="header-contact-detail">
                <p className="contact-info-header">Contact: +1 315 369 5943</p>
              </div>
            </li>

            {props.location.pathname === "/pages/voice-call" ||
            props.location.pathname === "/pages/video-call" ? (
              <>
                <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img
                      className="rounded-circle"
                      src={IMG01}
                      width="31"
                      alt="Darren Elder"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src={IMG01}
                          alt="User"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Darren Elder</h6>
                        <p className="text-muted mb-0">Doctor</p>
                      </div>
                    </div>

                    <Dropdown.Item to="/doctor/doctor-dashboard">
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item to="/doctor/profile-setting">
                      Profile Settings
                    </Dropdown.Item>
                    <Dropdown.Item to="/login">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : !isMenteeLoggedIn && !isMentorLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link header-login">
                    login / Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger header-login"
                  onClick={() => logoutHandler()}
                >
                  logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
