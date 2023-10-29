import _ from "lodash";

export default function TableBody({ data, columns }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr>
          {columns.map((column) => (
            <td>{_.get(item, column.path)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
