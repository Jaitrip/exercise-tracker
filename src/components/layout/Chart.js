import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      burntData: props.burntData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "",
    title: "",
    type: Bar
  };

  render() {
    return (
      <div className="chart">
        <this.props.type
        type ={ this.props.type}
          data={this.props.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>      
    );
  }
}

export default Chart;
