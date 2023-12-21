import React from "react";
import { Link } from "react-router-dom";
import "../Css/404.css";

const PageNotFound = () => {
  return (
    <>
      <h1>404 Error Page</h1>
      <p className="zoom-area">
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link
          to="/"
          className="more-link"
        >
          Home
        </Link>
      </div>
    </>
  );
};
export default PageNotFound;