import React, { useState, useEffect } from "react";
import DoctorSidebar from "../sidebar";
import Slot from "./slot";
import { Link } from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";

import { useSelector } from "react-redux";

import { fetchAvailability, updateAvailabilitySlots } from '../../../../api'

const ScheduleTiming = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    day: null,
    slotIndex: null
  });

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const [key, setKey] = useState(1);
  const [activeModal, setActiveModal] = useState(null);
  const [activeDay, setActiveDay] = useState(null);

  const mentorEmail = useSelector((state) => state.user.user.email);

  const getAvailability = async () => {
    try {
      // Send the mentor email to the backend API to fetch availability
      // const response = await axios.get(
      //   `http://localhost:5000/api/user/getavailability/${mentorEmail}`
      // );
      const response = await fetchAvailability(mentorEmail);
      const { availability } = response.data;

      // // Update the availability state
      setAvailability(availability);
    } catch (error) {
      // Handle error response from the backend
      console.error("Error fetching availability:", error);
    }
  };

  useEffect(() => {
    // Fetch availability data when the component mounts
    getAvailability();
  }, [availability]);

  const updateAvailability = async () => {

    try {
      // Send the availability data and mentor email to the backend API
      // await axios.post(`http://localhost:5000/api/user/availability/`, {
      //   availability,
      //   mentorEmail,
      // });
      await updateAvailabilitySlots({
        availability,
        mentorEmail,
      });
      getAvailability();
      // Update the UI or show a success message if needed
      console.log("Availability updated successfully");
    } catch (error) {
      // Handle error response from the backend
      console.error("Error updating availability:", error);
    }
  };

  const deleteTimeSlot = async (day, slotIndex) => {
    try {
      const updatedAvailability = { ...availability };
      if (updatedAvailability[day]) {
        updatedAvailability[day] = updatedAvailability[day].filter(
          (_, index) => index !== slotIndex
        );
      }

      // Send the updated availability data and mentor email to the backend API
      // await axios.post(`http://localhost:5000/api/user/availability/`, {
      //   availability: updatedAvailability,
      //   mentorEmail,
      // });
      await updateAvailabilitySlots({
        availability: updatedAvailability,
        mentorEmail,
      })

      // Fetch updated availability data
      getAvailability();

      // Update the UI or show a success message if needed
      console.log("Availability updated successfully");
    } catch (error) {
      // Handle error response from the backend
      console.error("Error updating availability:", error);
    }
  };


  const handleSelect = (selectedKey) => {
    setKey(selectedKey);
  };

  const openModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(false);
  };

  const [users, setUsers] = useState([{ value: "one", label: "One" }]);

  const removeClick = (e, i) => {
    e.preventDefault();
    let updatedUsers = [...users];
    updatedUsers.splice(i, 1);
    setUsers(updatedUsers);
  };

  const addClick = () => {
    setUsers([...users, { value: "one", label: "One" }]);
  };

  const [availability, setAvailability] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const handleTimeSlotChange = (e, day) => {
    const selectedTimeSlot = e.target.value;
    setAvailability((prevAvailability) => {
      const updatedAvailability = { ...prevAvailability };
      if (updatedAvailability[day]) {
        updatedAvailability[day].push(selectedTimeSlot);
      } else {
        updatedAvailability[day] = [selectedTimeSlot];
      }
      return updatedAvailability;
    });
  };

  const handleDeleteTimeSlot = (day, slotIndex) => {
    // Show confirmation popup
    handleShowConfirmation();
    setDeleteConfirmation({ day, slotIndex });

    // Update the availability state
    // setAvailability((prevAvailability) => {
    //   const updatedAvailability = { ...prevAvailability };
    //   if (updatedAvailability[day]) {
    //     updatedAvailability[day] = updatedAvailability[day].filter(
    //       (_, index) => index !== slotIndex
    //     );
    //   }
    //   return updatedAvailability;
    // });
  };

  const renderTimeSlots = (day) => {
    const slots = availability[day];
    if (slots && slots.length > 0) {
      return slots.map((slot, index) => (
        <div key={index} className="doc-slot-list">
          {slot}
          <a
            href="#0"
            className="delete_schedule"
            onClick={() => handleDeleteTimeSlot(day, index)}
          >
            <i className="fa fa-times"></i>
          </a>
        </div>
      ));
    } else {
      return <p className="text-muted mb-0">Not Available</p>;
    }
  };

  const createUI = () => {
    return (
      <div>
        <div className="row form-row">
          <div className="col-12 col-md-5">
            <div className="form-group">
              <label>Start Time</label>
              <select
                className="form-control"
                onChange={(e) => handleTimeSlotChange(e, activeDay)}
              >
                <option>-</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
                <option>09:00 PM</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="form-group">
              <label>End Time</label>
              <select className="form-control" disabled={true}>
                <option>-</option>
                <option>12.00 am</option>
                <option>12.30 am</option>
                <option>1.00 am</option>
                <option>1.30 am</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                    Schedule Timings
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Schedule Timings</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <DoctorSidebar />
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Schedule Timings</h4>
                      <div className="profile-box">
                        <div className="row">
                          <div className="col-lg-4">
                            {/* <div className="form-group">
                              <label>Timing Slot Duration</label>
                              <select className="select form-control">
                                <option>-</option>
                                <option>15 mins</option>
                                <option defaultValue="selected">30 mins</option>
                                <option>45 mins</option>
                                <option>1 Hour</option>
                              </select>
                            </div> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card schedule-widget mb-0">
                              <div className="schedule-header">
                                <div className="schedule-nav">
                                  <Tabs
                                    className="tab-view"
                                    activeKey={key}
                                    onSelect={handleSelect}
                                    id="controlled-tab-example"
                                  >
                                    {/* {createUI()} */}
                                    {Object.keys(availability).map(
                                      (day, index) => (
                                        <Tab
                                          key={index}
                                          className="nav-item"
                                          eventKey={index + 1}
                                          title={day}
                                        >
                                          <h4 className="card-title d-flex justify-content-between">
                                            <span>Time Slots</span>
                                            <a
                                              className="edit-link"
                                              data-toggle="modal"
                                              href="#add_time_slot"
                                              onClick={() => {
                                                openModal("add");
                                                setActiveDay(day);
                                              }}
                                            // onClick={()=>createUI()}
                                            >
                                              <i className="fa fa-plus-circle"></i>{" "}
                                              Add Slot
                                            </a>
                                          </h4>
                                          {renderTimeSlots(day)}
                                        </Tab>
                                      )
                                    )}
                                  </Tabs>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={activeModal === "add"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Time Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="hours-info">
            <div className="row form-row hours-cont">
              <div className="col-12 col-md-10">{createUI()}</div>
            </div>
          </div>
          <div className="submit-section text-center">
            <button
              onClick={() => {
                updateAvailability();
                handleCloseModal(); // Add this line to close the modal
              }}
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Save Changes
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this time slot?</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowConfirmation(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              // updateAvailability();
              setShowConfirmation(false);
              deleteTimeSlot(deleteConfirmation.day, deleteConfirmation.slotIndex);
            }}

          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ScheduleTiming;
