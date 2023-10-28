import { useState, useEffect } from "react";
import ListGroup from "./common/listGroup";
import { getSpecies } from "../services/speciesService";

export default function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getSpecies();
      const species = [{ uuid: "", name: "All" }, ...data];
      setSpecies(species);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={species}
            // selectedItem={selectedSpecies}
            // onItemSelect={handleSpeciesSelect}
          />
        </div>
      </div>
    </div>
  );
}
