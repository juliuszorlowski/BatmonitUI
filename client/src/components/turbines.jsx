import { useState, useEffect } from "react";
import ListGroup from "./common/listGroup";
import { getTurbines } from "../services/turbineService";

export default function Turbines() {
  const [turbines, setTurbines] = useState([]);
  const [selectedTurbine, setSelectedTurbine] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getTurbines();
      const turbines = [{ uuid: "", name: "All" }, ...data];
      setTurbines(turbines);
    }
    fetchData();
  }, []);

  function handleTurbineSelect(turbine) {
    setSelectedTurbine(turbine);
  }

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={turbines}
            selectedItem={selectedTurbine}
            onItemSelect={handleTurbineSelect}
          />
        </div>
      </div>
    </div>
  );
}
