import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./common/tableHeader";

class RecordsTable extends Component {
  columns = [
    { path: "uuid", label: "ID" },
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
            <tr key={record.uuid}>
              <td>
                <Link to={`/records/${record.uuid}`}>{record.uuid}</Link>
              </td>
              <td>{record.date}</td>
              <td>{record.turbineId}</td>
              <td>{record.bat === true ? "YES" : "NO"}</td>
              <td>{record.speciesId}</td>
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
