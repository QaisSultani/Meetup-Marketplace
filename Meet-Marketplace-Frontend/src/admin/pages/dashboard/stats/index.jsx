import React from "react";

export default function Stats({ title, count, classColor }) {
  return (
    <div className="col-xl-4 col-sm-4 col-12">
      <div className="card">
        <div className="card-body">
          <div className="dash-widget-header">
            <span
              className={`dash-widget-icon text-${classColor} border-${classColor}`}
            >
              <i className="fe fe-users"></i>
            </span>
            <div className="dash-count">
              <h3 className={`text-${classColor}`}>{count}</h3>
            </div>
          </div>
          <div className="dash-widget-info">
            <h6 className={`text-${classColor}`}>{title}</h6>
            <div className="progress progress-sm ">
              <div className={`progress-bar bg-${classColor} w-50`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
