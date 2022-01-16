import React from "react";

export default function Curve({ upward, className }) {
  const renderCurve = () => {
    if (!upward) {
      return (
        <div>
          <div
            className={
              className ? className : "custom-shape-divider-top-1638649262"
            }
          >
            <svg
              className="svg-shape"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="header-color-primary"
              ></path>
            </svg>
          </div>
        </div>
      );
    } else {
      return (
        <div className="custom-shape-divider-top-1638667866">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="header-color-secondary"
            ></path>
          </svg>
        </div>
      );
    }
  };

  return <div>{renderCurve()}</div>;
}
