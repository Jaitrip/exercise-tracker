import React, { Component } from "react";
import moment from "moment"
import { Line } from "react-chartjs-2";

export default class CalorieBurntVisualisation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],

      datasets: [
        {
          label: "Burnt Calories",
          data: this.convertToDataset(this.props.caloriesBurnt),
          backgroundColor: ["rgba(75, 192, 192, 1)"]
        },
        {
          label: "Intake Calories",
          data: this.convertToDataset(this.props.calorieIntake),
          backgroundColor: ["rgba(75, 192, 192, 0.5)"],
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 600,
                    suggestedMax: 10000
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }

  convertToDataset = (dataArray) => {
    const sortedArray = dataArray.sort((a, b) => {
      return moment(a[0]) - moment(b[0])
    })
    const modifiedArray = sortedArray.map(x => x[1])
    return modifiedArray
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) { 
      //console.log(this.convertToDataset(this.props.caloriesBurnt))
      this.setState({
        datasets: [
          {
            label: "Burnt Calories",
            data: this.convertToDataset(this.props.caloriesBurnt),
            backgroundColor: ["rgba(75, 192, 192, 1)"]
          },
          {
            label: "Intake Calories",
            data: this.convertToDataset(this.props.calorieIntake),
            backgroundColor: ["rgba(75, 192, 192, 0.5)"],
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: 600,
                      suggestedMax: 10000
                    }
                  }
                ]
              }
            }
          }
        ]
      })
    }
  }

  render() {
    return (
      <Line
        data={{
          labels : this.state.labels,
          datasets : this.state.datasets
        }}
        options={{
          title: {
            display: true,
            text: "Burnt vs InTake",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />  
    )
  }
}