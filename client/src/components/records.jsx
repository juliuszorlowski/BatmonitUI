import React, { Component } from "react";
import RecordsTable from "./recordsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getRecords } from "../services/recordService";
import { getTurbines } from "../services/turbineService";
import { getSpecies } from "../services/speciesService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Records extends Component {
  state = {
    records: [],
    turbines: [],
    species: [],
    currentPage: 1,
    pageSize: 8,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getSpecies();
    const species = [{ uuid: "", name: "All" }, ...data];

    const { data: records } = await getRecords();

    this.setState({
      records,
      turbines: getTurbines(),
      species,
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTurbineSelect = (turbine) => {
    this.setState({ selectedTurbine: turbine, currentPage: 1 });
  };

  handleSpeciesSelect = (species) => {
    this.setState({ selectedSpecies: species, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedSpecies,
      records: allRecords,
    } = this.state;

    const filtered =
      selectedSpecies && selectedSpecies.uuid
        ? allRecords.filter((r) => r.species.uuid === selectedSpecies.uuid)
        : allRecords;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const records = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, records: records };
  };

  render() {
    const { length: count } = this.state.records;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>No records based on the current selection</p>;

    const { totalCount, records } = this.getPagedData();

    return (
      <div>
        <div className="row">
          {/* <div className="col-3">
            <ListGroup
              items={this.state.turbines}
              selectedItem={this.state.selectedTurbine}
              onItemSelect={this.handleTurbineSelect}
            />
          </div> */}
          <div className="col-3">
            <ListGroup
              items={this.state.species}
              selectedItem={this.state.selectedSpecies}
              onItemSelect={this.handleSpeciesSelect}
            />
          </div>
        </div>
        <div>
          <p>Showing {totalCount} records in the database.</p>
          <RecordsTable
            records={records}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Records;