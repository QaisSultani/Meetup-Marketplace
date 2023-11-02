import React from "react";

export default function WarningMessage({ warning }) {
  return (
    <>
      {warning && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="alert alert-warning w-50 fs-xs" role="warning">
            {warning}
          </div>
        </div>
      )}
    </>
  );
}
