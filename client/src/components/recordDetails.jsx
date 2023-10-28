import { useParams, useHistory } from "react-router-dom";

export default function RecordDetails() {
  let { id } = useParams();
  let history = useHistory();

  return (
    <div>
      <h1>Record Details {id}</h1>
      <button className="btn btn-primary" onClick={history.goBack}>
        Back
      </button>
    </div>
  );
}
