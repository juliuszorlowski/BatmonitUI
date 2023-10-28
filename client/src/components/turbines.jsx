import { useState, useEffect } from "react";
import ListGroup from "./common/listGroup";
import { getTurbines } from "../services/turbineService";

export default function Turbines() {
  const [turbines, setTurbines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getTurbines();
      const turbines = [{ uuid: "", name: "All" }, ...data];
      setTurbines(turbines);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={turbines}
            // selectedItem={this.state.selectedTurbines}
            // onItemSelect={this.handleTurbinesSelect}
          />
        </div>
      </div>
    </div>
  );
}
