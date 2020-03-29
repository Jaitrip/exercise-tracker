import React, { Component } from "react";
import Chart from "./layout/Chart";
import Navbar from "./layout/Navbar";

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID : this.props.match.params.id,
      chartData: {}
    };
    //recieves data from API Call via to feed into Chart
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax Call Here
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "SpringField",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,99,132,0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar userID={this.state.userID}/>
        <div className="Weekly">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-md-auto"></div>

              <Chart
                chartData={this.state.chartData}
                location="New York"
                legendPosition="bottom"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
