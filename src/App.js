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
  }
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
  render() {
    const { filterType, filterYear, sortMethod } = this.state;
    return (
      <div className="App">
        <div>
          Year
          {[2021, 2020].map((year) => (
            <button key={year} onClick={() => this.handleYear(year)}>
              {year}
            </button>
          ))}
        </div>
        <div>
          type
          {["SUV", "Hatchback", "Sedan"].map((type) => (
            <button key={type} onClick={() => this.handleType(type)}>
              {type}
            </button>
          ))}
        </div>
        {data
          .filter(({ year, type }) => {
            const { SUV, Hatchback, Sedan } = type;
            let filterType = true;
            if (type == "SUV") {
              filterType = SUV ? true : false;
            } else if (type == "Hatchback") {
              filterType = Hatchback ? true : false;
            } else if (type == "Sedan") {
              filterType = Sedan ? true : false;
            }
            return year >= filterYear && filterType;
          })
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "ascending") {
              return a.price - b.price;
            }
            if (sortMethod === "descending") {
              return b.price - a.price;
            }
          })
          .map((item) => (
            <car data={item} key={item.id} />
          ))}
      </div>
    );
  }
}
