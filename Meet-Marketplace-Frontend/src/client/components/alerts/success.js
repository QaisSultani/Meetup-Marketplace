import React from "react";

export default function SuccessMessage({ success }) {
  return (
    <>
      {success && (
        <div className="d-flex justify-content-center align-items-start">
          <div className="alert alert-success w-75" role="success">
            {success}
          </div>
        </div>
      )}
    </>
  );
}
