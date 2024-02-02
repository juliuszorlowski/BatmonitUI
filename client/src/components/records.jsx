import React, { Component } from "react";
import SearchBox from "./searchBox";
import RecordsTable from "./recordsTable";
import Dropdown from "./common/dropdown";
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
    pageSize: 10,
    selectedSpecies: null,
    selectedTurbine: null,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async populateSpecies() {
    const { data } = await getSpecies();
    const species = [{ id: "", name: "All" }, ...data];
    this.setState({ species });
  }

  async populateTurbines() {
    const { data: allTurbines } = await getTurbines();
    const turbines = [{ id: "", name: "All" }, ...allTurbines];
    this.setState({ turbines });
  }

  async populateRecords() {
    const { data: records } = await getRecords();
    this.setState({ records });
  }

  async componentDidMount() {
    await this.populateSpecies();
    await this.populateTurbines();
    await this.populateRecords();
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSpeciesSelect = (species) => {
    this.setState({
      selectedSpecies: species,
      selectedTurbine: null,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleTurbineSelect = (turbine) => {
    this.setState({
      selectedTurbine: turbine,
      selectedSpecies: null,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedSpecies: null,
      selectedTurbine: null,
      currentPage: 1,
    });
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
      selectedTurbine,
      searchQuery,
      records: allRecords,
    } = this.state;

    let filtered = allRecords;
    if (searchQuery)
      filtered = allRecords.filter((r) =>
        r.date.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedSpecies && selectedSpecies.id)
      filtered = allRecords.filter((r) => r.speciesId === selectedSpecies.id);
    else if (selectedTurbine && selectedTurbine.id)
      filtered = allRecords.filter((r) => r.turbineId === selectedTurbine.id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const records = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, records: records };
  };

  render() {
    const { length: count } = this.state.records;
    const { pageSize, currentPage, searchQuery, sortColumn } = this.state;

    if (count === 0) return <p>No records based on the current selection</p>;

    const { totalCount, records } = this.getPagedData();

    return (
      <div>
        <p>Showing {totalCount} records in the database.</p>
        <div className="row">
          <div className="col-2">
            <Dropdown
              title="Filter by species"
              items={this.state.species}
              onItemSelect={this.handleSpeciesSelect}
            />
          </div>
          <div className="col-2">
            <Dropdown
              title="Filter by turbines"
              items={this.state.turbines}
              onItemSelect={this.handleTurbineSelect}
            />
          </div>
        </div>
        <div>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
