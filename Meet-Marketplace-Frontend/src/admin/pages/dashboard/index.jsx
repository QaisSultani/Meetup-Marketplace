import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import { getallbookings, getusers } from "../../../api";
import Stats from "./stats";
import SidebarNav from "../../components/sidebar/index";
import Users from "../../components/users/index";

function Dashboard() {
  const [tabKey, setTabKey] = useState(1);
  const [nonActiveMentors, setNonActiveMentors] = useState([]);
  const [activeMentors, setActiveMentors] = useState([]);
  const [message, setMessage] = useState("");
  const [stats, setStats] = useState({});

  const fetchUsers = async () => {
    await getusers()
      .then(async (response) => {
        console.log("response.data: ", response.data)
        let users = response.data;
        const mentors = users.filter((user) => user.userType === "mentor");
        const mentees = users.filter((user) => user.userType === "mentee");

        const responseObject = await getallbookings();
        setStats({
          mentors: mentors.length,
          mentees: mentees.length,
          bookings: responseObject.data.bookings.length,
        });
        setActiveMentors(
          users.filter(
            (user) =>
              user.userType === "mentor" &&
              user.statusValue === "active" &&
              user.userRole !== "superadmin"
          )
        );
        setNonActiveMentors(
          users.filter(
            (user) =>
              user.userType === "mentor" && user.statusValue === "inactive"
          )
        );
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [message]);

  const handleSelect = (key) => {
    setTabKey(key);
  };

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Welcome Admin!</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <Stats title="Mentors" classColor="primary" count={stats.mentors} />
            <Stats title="Mentees" classColor="danger" count={stats.mentees} />
            <Stats
              title="Bookings"
              classColor="success"
              count={stats.bookings}
            />
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h4 className="p-2">Mentors</h4>
              <div className="card card-table flex-fill">
                <Tabs
                  className="tab-view"
                  activeKey={tabKey}
                  onSelect={(key) => handleSelect(key)}
                  id="controlled-tab-example"
                >
                  <Tab className="nav-item" eventKey={1} title="Non Active">
                    <Users
                      data={nonActiveMentors}
                      actions={true}
                      setMessage={setMessage}
                    />
                  </Tab>

                  <Tab className="nav-item" eventKey={2} title="Active">
                    <Users
                      data={activeMentors}
                      actions={false}
                      setMessage={setMessage}
                    />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
