import React from "react";
import "./LoadingSpinner.css";

/** Loading message used by components that fetch API data. */

function LoadingSpinner() {
  return (
      <div className="loading">
      <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
  );
}

export default LoadingSpinner;