import React, { Component } from "react";

const RecordDetails = ({ match, history }) => {
  return (
    <div>
      <h1>Record Details {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/records")}
      >
        Back
      </button>
    </div>
  );
};

export default RecordDetails;
