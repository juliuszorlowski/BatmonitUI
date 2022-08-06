import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./common/tableHeader";

class RecordsTable extends Component {
  columns = [
    { path: "_id", label: "ID" },
    { path: "date", label: "Date" },
    { path: "turbine", label: "Turbine" },
    { path: "bat", label: "Bat" },
    { path: "species.name", label: "Species" },
    { path: "turbineStopSignal", label: "Turbine Stop Signal" },
    { path: "verification", label: "Verification" },
    { path: "audio", label: "Audio" },
    { path: "sonogram", label: "Sonogram" },
  ];

  render() {
    const { records, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>
                <Link to={`/records/${record._id}`}>{record._id}</Link>
              </td>
              <td>{record.date}</td>
              <td>{record.turbine}</td>
              <td>{record.bat === true ? "YES" : "NO"}</td>
              <td>{record.species.name}</td>
              <td>{record.turbineStopSignal === true ? "YES" : "NO"}</td>
              <td>{record.verification === true ? "YES" : "NO"}</td>
              <td>{record.audio}</td>
              <td>{record.sonogram}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RecordsTable;
