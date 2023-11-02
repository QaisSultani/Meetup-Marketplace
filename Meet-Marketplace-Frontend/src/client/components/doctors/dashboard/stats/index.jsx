import React from "react";
import ProgressBar from "react-customizable-progressbar";

export default function Statics({
  title,
  icon,
  progress,
  count,
  caption,
  color,
}) {
  return (
    <div className="col-md-12 col-lg-4">
      <div className="dash-widget">
        <ProgressBar
          width={20}
          radius={100}
          progress={progress}
          rotate={-210}
          strokeWidth={16}
          strokeColor={color}
          strokeLinecap="square"
          trackStrokeWidth={8}
          trackStrokeColor="#e6e6e6"
          trackStrokeLinecap="square"
          pointerRadius={0}
          initialAnimation={true}
          transition="1.5s ease 0.5s"
          trackTransition="0s ease"
        >
          <div className="indicator-volume">
            <img src={icon} className="img-fluid" alt="Patient" />
          </div>
        </ProgressBar>
        <div className="dash-widget-info">
          <h6>{title}</h6>
          <h3>{count}</h3>
          <p className="text-muted">{caption}</p>
        </div>
      </div>
    </div>
  );
}
