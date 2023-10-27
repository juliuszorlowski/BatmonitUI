import React, { Component } from "react";

class RecordDetails extends Component {
  handleBack = () => {
    this.props.history.push("/records");
  };

  render() {
    return (
      <div>
        <h1>Record Details {this.props.match.params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default RecordDetails;
