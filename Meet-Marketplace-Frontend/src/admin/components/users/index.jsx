import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import ConfirmationModal from "./modal/confirmation";

function Users({ data, actions, setMessage }) {
  const [show, setShow] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const handleShow = ({ action, email }) => {
    setShow(action);
    setCurrentUser(email);
  };

  const columns = [
    {
      title: "ID#",
      dataIndex: "serialNo",
      render: (text, record, index) => index + 1,
      sorter: (a, b) => a.serialNo.length - b.serialNo.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile">{record.name}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile">{record.email}</Link>
        </h2>
      ),
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: actions ? "Actions" : "",
      render: (text, record) => (
        <div className="actions">
          {actions && (
            <>
              <button
                className="btn btn-sm bg-success-light"
                onClick={() =>
                  handleShow({ action: "Accept", email: record.email })
                }
              >
                <i className="fe fe-check"></i> Accept
              </button>
              <a
                href="#0"
                className="btn btn-sm bg-danger-light"
                onClick={() =>
                  handleShow({ action: "Reject", email: record.email })
                }
              >
                <i className="fe fe-trash"></i> Reject
              </a>
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
          // bordered
          dataSource={data}
          ascend={true}
          rowKey={(record) => record._id}
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

      <ConfirmationModal
        show={show}
        setShow={setShow}
        setMessage={setMessage}
        currentUser={currentUser}
      />
    </>
  );
}

export default Users;
