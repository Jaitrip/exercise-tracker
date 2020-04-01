import React, { Component } from "react";
import Chart from "./layout/Chart";
import Navbar from "./layout/Navbar";
import { Bar, Line } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.match.params.id,
      chartData: {},
      burntData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
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
            label: "This Week",
            data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
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
            data: [4, 9, 5, 7, 12, 9, 15, 4, 8, 3, 4, 1],
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
      },

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
    });
  }

  render() {
    return (
      <div>
        <Navbar userID={this.state.userID} />

        <div id="weekly-page">
          <Container>
            <div className="jumbotron-fluid  text-light">
              <div className="container text-center">
                <h1 className="display-4">Weekly Chart</h1>
              </div>
            </div>

            <Container>
           <Row className="bg-light justify-content-md-center ">
                <Col className="col col-lg-6" >
                  <Chart
                    chartData={this.state.chartData}
                    title="Calories inTake"
                    legendPosition="bottom"
                    type={Bar}
                  />
                </Col>
              </Row>
              <Row className="bg-light justify-content-md-center my-1 ">
                <Col className="col col-lg-6" >
                  <Chart
                    chartData={this.state.burntData}
                    title="Burnt vs inTake"
                    legendPosition="bottom"
                    type={Line}
                  />
                </Col>
              </Row>
              </Container>  
          </Container>
        </div>
      </div>
    );
  }
}
