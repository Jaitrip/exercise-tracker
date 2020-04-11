import React, { Component } from "react";
import moment from "moment"
import { Bar, Line } from "react-chartjs-2";

export default class CalorieIntakeVisualisation extends Component {
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

      datasets : [
        {
          label: "This Week",
          data: this.props.currentWeekCalories,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(127, 191, 63, 1)" 
          ]
        }, 

        {
          label: "Last Week",
          data: this.props.previousWeekCalories,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(127, 191, 63, 0.5)"
          ],
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
      this.setState({
        datasets : [
          {
            label: "This Week",
            data: this.convertToDataset(this.props.currentWeekCalories),
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(127, 191, 63, 1)"
            ]
          }, 
  
          {
            label: "Last Week",
            data: this.convertToDataset(this.props.previousWeekCalories),
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(127, 191, 63, 0.5)"
            ],
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
      <div className="chart">
        <Bar
          data={{
            labels : this.state.labels,
            datasets : this.state.datasets
          }}
          options={{
            title: {
              display: true,
              text: "Calories InTake",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />  
      </div>
    )
  }
}