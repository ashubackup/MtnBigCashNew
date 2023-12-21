import React from "react";
import "../Css/500.css";

const ErrorPage = () => {
  return (
    <>
      <div className="loading">
        <div className="internal-first-div">500</div>
        <div className="internal-second-div">
          Unexpected Error <b>:(</b>
        </div>
        <div className="gears">
          <div className="gear one">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear two">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear three">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;