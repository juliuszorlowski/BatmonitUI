import { Link } from "react-router-dom";
import TableHeader from "./common/tableHeader";

export default function RecordsTable({ records, sortColumn, onSort }) {
  const columns = [
    { path: "id", label: "Id" },
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
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>
              <Link to={`/records/${record.id}`}>{record.id}</Link>
            </td>
            <td>{record.date}</td>
            <td>{record.turbine.name}</td>
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
