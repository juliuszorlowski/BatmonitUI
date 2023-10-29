import { Link } from "react-router-dom";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

export default function RecordsTable({ records, sortColumn, onSort }) {
  const columns = [
    { path: "uuid", label: "Id" },
    { path: "date", label: "Date" },
    { path: "turbineId", label: "Turbine" },
    {
      path: "bat",
      label: "Bat",
      content: (column) => (column.content === true ? "YES" : "NO"),
    },
    { path: "speciesId", label: "Species" },
    { path: "turbineStopSignal", label: "Turbine Stop Signal" },
    { path: "verification", label: "Verification" },
    { path: "audio", label: "Audio" },
    { path: "sonogram", label: "Sonogram" },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      {/* <TableBody data={records} columns={columns} /> */}
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
