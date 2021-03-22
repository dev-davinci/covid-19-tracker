import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./utils/api";
class App extends Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }
  render() {
    return (
      <div>
        <Chart />
        <Cards />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
