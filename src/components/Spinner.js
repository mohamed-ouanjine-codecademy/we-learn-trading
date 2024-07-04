import React from "react";

function Spinner() {
  return (
    <>
      <span className="spinner-border spinner-border-lg" aria-hidden="true"></span>
      <span className="visually-hidden" role="status">Loading...</span>
    </>
  );
};

export default Spinner;