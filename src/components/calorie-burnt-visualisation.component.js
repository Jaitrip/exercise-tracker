import React, { Component } from "react";
import Chart from "./layout/Chart";
import { Bar, Line } from "react-chartjs-2";


export default class CalorieBurntVisualisation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            burntData: {
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
                    data: [-20, -9, -3, -4, -8, -3, -2, -3, -5, -6, -14, -1],
                    backgroundColor: ["rgba(75, 192, 192, 1)"]
                  },
                  {
                    label: "Intake Calories",
                    data: [4, 9, 5, 7, 12, 9, 15, 4, 8, 3, 4, 1],
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
    }

    render() {
        return (
            <Chart
            chartData={this.state.burntData}
            title="Burnt vs inTake"
            legendPosition="bottom"
            type={Line}
          />
        )
    }
}