import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { approvebooking, rejectbooking } from "../../../../../../api";

export default function BookingActionModal({
  show,
  setShow,
  current,
  setOpen,
  check,
  setCheck,
}) {
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setShow("");
  };

  const handleFunction = async (action) => {
    setLoading(true);
    if (action === "Accept") {
      await approvebooking({
        userEmail: current.email,
        dateTime: current.dateTime,
      })
        .then((response) => {
          setCheck(!check);
          setShow("");
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } else {
      await rejectbooking({
        userEmail: current.email,
        dateTime: current.dateTime,
      })
        .then((response) => {
          setCheck(!check);
          setShow("");
        })
        .catch((err) => {
          console.log("error: ", err.message);
        });
    }
    setLoading(false);
  };
  return (
    <Modal
      show={show === "Accept" || show === "Reject"}
      onHide={() => handleClose()}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {show === "Accept" ? "Accept Mentor Request" : "Reject Mentor "}
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="form-content p-2 m-3">
          <p className="mb-4">Are you sure want to {show} the request?</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleFunction(show)}
          >
            {loading ? <ClipLoader color="white" size={20} /> : show}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleClose()}
          >
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
