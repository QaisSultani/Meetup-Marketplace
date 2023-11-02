import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { changeusertype } from "../../../../api";
import { ClipLoader } from "react-spinners";

export default function ConfirmationModal({
  show,
  setShow,
  setMessage,
  currentUser,
}) {
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setShow("");
  };

  const handleFunction = async () => {
    setLoading(true);
    let statusValue = show === "Accept" ? "active" : "inactive";
    await changeusertype(currentUser, { statusValue })
      .then((response) => {
        setMessage(response.data.message);
        setShow("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <Modal
      show={show === "Accept" || show === "Reject"}
      onHide={() => handleClose()}
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {show === "Accept" ? "Accept Mentor Request" : "Reject Mentor "}
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="form-content p-2">
          {/* <h4 className="modal-title">Delete</h4> */}
          <p className="mb-4">Are you sure want to {show} the request?</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleFunction()}
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
