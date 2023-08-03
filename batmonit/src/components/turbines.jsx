import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import { getTurbines } from "../services/turbineService";
import _ from "lodash";

class Turbines extends Component {
  state = {
    turbines: [],
  };

  async componentDidMount() {
    const { data } = await getTurbines();
    const turbines = [{ uuid: "", name: "All" }, ...data];

    this.setState({
      turbines,
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.turbines}
              selectedItem={this.state.selectedTurbines}
              onItemSelect={this.handleTurbinesSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Turbines;
