import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";

import BookingActionModal from "./modal/changeStatus";
import { approvebooking, rejectbooking } from "../../../../../api/index";
import {
  formatDate,
  formatTime,
} from "../../../../../helpers/customFunctions/index.js";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import ViewBookingModal from "./modal/view";

function Users({ data, actions, setCheck, check }) {
  const [show, setShow] = useState("");
  const [openModal, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [current, setCurrent] = useState({});

  //////////////////////////////////////////
  console.log("User data: ", data)
  //////////////////////////////////////////

  const handleShow = ({ action, email, dateTime, record }) => {
    setShow(action);
    setCurrent({ email, dateTime });
  };

  const columns = [
    {
      title: "ID#",
      dataIndex: "serialNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Customer",
      dataIndex: "email",
      render: (text, record) => (
        <h2 className="table-avatar">
          <p>{record.userEmail}</p>
        </h2>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <h2 className="table-avatar">
          <p>{formatDate(record.dateTime)}</p>
        </h2>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (text, record) => (
        <h2 className="table-avatar">
          <p>{formatTime(record.dateTime)}</p>
        </h2>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text, record) => (
        <h2 className="table-avatar">
          <p>${record.payment}</p>
        </h2>
      ),
    },
    {
      render: (text, record) => (
        <div className="actions">
          <button
            className="btn btn-sm bg-info-light fs-xs"
            onClick={() => {
              setSelected(record);
              setOpen(!openModal);
            }}
          >
            <i className="far fa-eye icon-xs"></i> View
          </button>

          {actions && (
            <>
              <button
                className="btn btn-sm bg-success-light fs-xs"
                onClick={() =>
                  handleShow({
                    action: "Accept",
                    email: record.userEmail,
                    dateTime: record.dateTime,
                    record,
                  })
                }
              >
                <i className="fas fa-check icon-xss"></i> Accept
              </button>
              <button
                className="btn btn-sm bg-danger-light fs-xs"
                onClick={() =>
                  handleShow({
                    action: "Reject",
                    email: record.userEmail,
                    dateTime: record.dateTime,
                  })
                }
              >
                <i className="fas fa-times icon-xs"></i> Reject
              </button>
            </>
          )}
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="table-responsive">
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          ascend={true}
          rowKey={(record) => uuidv4()}
          showSizeChanger={true}
          pagination={{
            total: data.length,
            showTotal: (total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            showSizeChanger: true,
            onShowSizeChange: onShowSizeChange,
            itemRender: itemRender,
          }}
        />
      </div>

      {/* <ViewBookingModal
        open={openModal}
        setOpen={setOpen}
        date={
          formatDate(selected.dateTime) + " " + formatTime(selected.dateTime)
        }
        status={selected.statusValue}
        processDate="29 Jun 2023"
        amount={selected.payment}
      /> */}

      <ViewBookingModal
        open={openModal}
        setOpen={setOpen}
        booking={selected}
      />

      <BookingActionModal
        show={show}
        setShow={setShow}
        current={current}
        setOpen={setOpen}
        check={check}
        setCheck={setCheck}
      />

      {/* <Modal
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
              {show}
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
      </Modal> */}
    </>
  );
}

export default Users;
