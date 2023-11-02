import React from "react";

export default function ErrorMessage({ error }) {
  return (
    <>
      {error && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="alert alert-danger w-75" role="alert">
            {error}
          </div>
        </div>
      )}
    </>
  );
}
