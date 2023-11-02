import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  formatDate,
  formatTime,
} from "../../../../../../helpers/customFunctions";

export default function ViewBookingModal({
  open,
  setOpen,
  booking
}) {
  const [processedDate, setProcessedDate] = useState(null)
  const [userDetails, setUserDetails] = useState(null)

  console.log("Booking: ", booking)

  useEffect(() => {
    const processed_date = formatDate(booking.dateTime) + " " + formatTime(booking.dateTime)
    setProcessedDate(processed_date)
    setUserDetails(booking.userDetails)
  }, [booking])

  const handleClose = () => {
    setOpen(false);
  };

  const buttonBackground =
    booking.statusValue === "approved" ? "bg-success-light" : "bg-warning-light";

  return (
    <Modal show={open} onHide={() => handleClose()} centered>
      <Modal.Header className="modal-header" closeButton>
        <h5 className="modal-title">Booking Details</h5>
      </Modal.Header>
      <Modal.Body>
        <ul className="info-details">
          <li>
            <div className="details-header">
              <div className="row">
                <div className="col-md-6">
                  <span className="title">Session Timing</span>
                  <span className="text">{processedDate}</span>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <button
                      type="button"
                      className={`btn ${buttonBackground} btn-sm`}
                      id="topup_status"
                    >
                      {booking.statusValue}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* <li>
            <span className="title">Status:</span>
            <span className="text">{status}</span>
          </li> */}
          <li>
            <span className="title">Paid Amount</span>
            <span className="text">${booking.payment}</span>
          </li>
          {userDetails && <li>
            <span className="title">Mentee Details:</span>
            <span className="text">{userDetails.name}</span>
            <span className="text">{userDetails.email}</span>
            <span className="text">{userDetails.contact}</span>
            <span className="text">{userDetails.location}</span>
          </li>}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
