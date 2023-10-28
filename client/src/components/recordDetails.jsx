import { useParams, useHistory } from "react-router-dom";

export default function RecordDetails() {
  let { id } = useParams();
  let history = useHistory();

  return (
    <div>
      <h1>Record Details</h1>
      <p>{id}</p>
      <button className="btn btn-primary" onClick={history.goBack}>
        Back
      </button>
    </div>
  );
}
