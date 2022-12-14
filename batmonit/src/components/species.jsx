import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import { getSpecies } from "../services/speciesService";
import _ from "lodash";

class Species extends Component {
  state = {
    species: [],
  };

  componentDidMount() {
    const species = [{ uuid: "", name: "All" }, ...getSpecies()];

    this.setState({
      species,
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.species}
              selectedItem={this.state.selectedSpecies}
              onItemSelect={this.handleSpeciesSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Species;
