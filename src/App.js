import "./styles.css";
import data from "./data.json";
import car from "./Components/Car";
import { render } from "react-dom";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: null,
      filterYear: null,
      sortMethod: null
    };
    handleType = (type) => {
      this.setState({
        filterType: type
      });
    };
    handleYear = (year) => {
      this.setState({
        filterYear: year
      });
    };
    handleSort = (order) => {
      this.setState({
        sortMethod: order
      });
    };
  }
  render() {
    const { filterType, filterYear, sortMethod } = this.state;
    return (
      <div className="App">
        <div>
          Year{" "}
          {[2021, 2020].map((year) => (
            <button key={year} onClick={() => this.handleYear(year)}>
              {year === 2021 ? "All" : year}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
