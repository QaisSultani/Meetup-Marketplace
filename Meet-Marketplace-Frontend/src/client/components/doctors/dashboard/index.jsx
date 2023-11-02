import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";

import DoctorSidebar from "../sidebar";
import { getbookings } from "../../../../api";
import { Icon01 } from "./img";
import { percentage } from "../../../../helpers/customFunctions/index.js";
import Statics from "./stats";
import Users from "./users";
import { formatDate } from "../../../../helpers/customFunctions/index.js";

function DoctorDashboard() {
  const [tabKey, setTabKey] = useState(1);
  const [check, setCheck] = useState(false);
  const [completedBookings, setCompleted] = useState([]);
  const [pendingBookings, setPending] = useState([]);

  const [stats, setStats] = useState({
    mentees: 0,
    today: 0,
    bookings: 0,
  });
  const currentDate = formatDate(new Date());

  const handleSelect = (key) => {
    setTabKey(key);
  };
  const fetchBookings = async () => {
    await getbookings()
      .then((response) => {
        const completed = response.data.bookings.filter(
          (booking) => booking.statusValue === "approved"
        );

        const pending = response.data.bookings.filter(
          (booking) => booking.statusValue === "pending"
        );

        const today = pending.filter((obj) => {
          const objDate = formatDate(obj.dateTime);
          return objDate == currentDate;
        });

        setCompleted(completed);
        setPending(pending);
        setStats({
          mentees: completed.length,
          today: today.length,
          bookings: response.data.bookings.length,
        });
      })
      .catch((err) => {
        console.log(
          "err: ",
          err.response ? err.response.data.error : err.message
        );
        const fetchBookings = async () => {
          await getbookings()
            .then((response) => {
              const completed = response.data.bookings.filter(
                (booking) => booking.statusValue === "approved"
              );

              const pending = response.data.bookings.filter(
                (booking) => booking.statusValue === "pending"
              );

              const today = pending.filter((obj) => {
                const objDate = formatDate(obj.dateTime);
                return objDate == currentDate;
              });

              setCompleted(completed);
              setPending(pending);
              setStats({
                mentees: completed.length,
                today: today.length,
                bookings: response.data.bookings.length,
              });
            })
            .catch((err) => {
              console.log(
                "err: ",
                err.response ? err.response.data.error : err.message
              );
            });
        };
      });
  };

  useEffect(() => {
    fetchBookings();
  }, [check]);

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">
                        <Statics
                          title="Total Customers"
                          caption="Till Today"
                          count={stats.mentees}
                          progress={percentage(stats.mentees, 100)}
                          icon={Icon01}
                          color="#da3f81"
                        />
                        <Statics
                          title="Today Customers"
                          caption={currentDate}
                          count={stats.today}
                          progress={percentage(stats.today, 200)}
                          icon={Icon01}
                          color="#68dda9"
                        />
                        <Statics
                          title="Bookings"
                          caption="Till Today"
                          count={stats.bookings}
                          progress={percentage(stats.bookings, 100)}
                          icon={Icon01}
                          color="#1b5a90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Customer Bookings</h4>
                  <div className="appointment-tab">
                    <Tabs
                      className="tab-view"
                      activeKey={tabKey}
                      onSelect={(key) => handleSelect(key)}
                      id="controlled-tab-example"
                    >
                      <Tab className="nav-item" eventKey={1} title="Pending">
                        <Users
                          data={pendingBookings}
                          actions={true}
                          setCheck={setCheck}
                          check={check}
                        />
                      </Tab>
                      <Tab className="nav-item" eventKey={2} title="Completed">
                        <Users data={completedBookings} actions={false} />
                      </Tab>
                    </Tabs>
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

export default DoctorDashboard;
