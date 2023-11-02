import React, { Component } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import { adminSignOut } from "../../../redux/slices/userSlice";

function SidebarNav(props) {
  const { location } = props;
  const dispatch = useDispatch();
  const router = useHistory();
  let pathname = location.pathname;

  const signout = () => {
    dispatch(adminSignOut());
    router.push("/admin");
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className={pathname === "/admin" ? "active" : ""}>
              <Link to="/admin">
                <i className="fe fe-home" /> <span>Dashboard</span>
              </Link>
            </li>

            {/* <li className="submenu">
                <a href="#">
                  <i className="fe fe-document" /> <span> Reports</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link
                      to="/admin/invoice-report"
                      className={
                        pathname.includes("invoice-report") ? "active" : ""
                      }
                    >
                      Invoice Reports
                    </Link>
                  </li>
                </ul>
              </li> */}

            <li className={pathname.includes("profile") ? "active" : ""}>
              <Link to="/admin/profile">
                <i className="fe fe-user-plus" /> <span>Profile</span>
              </Link>
            </li>

            <li>
              <button onClick={() => signout()} className='logout-button'>
                <i className="fe fe-logout px-2" size={15} /> <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SidebarNav);
