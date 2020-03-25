import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../index.css";

import {InputGroup, Container, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";





import FormControl from 'react-bootstrap/FormControl'

export default class mainMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: "",
      duration: 0,
      caloriesBurned: 0,
      startDate: new Date()
    };
    //recieves data from API Call via to feed into Chart
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">Meal Plans</h1>
            <p className="lead">Select from the options below</p>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              https://getbootstrap.com/docs/4.0/utilities/spacing/
            </div>
            <div class="col-md-auto">
              this is for spacing and wrapping p is padding, it has different
              sides and sizes similar to wrapping. Check code on how i used it
              for the buttons.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center py-3">
            <div class="col-md-auto">
              This is a completely new row with x and y padding of size 3
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center py-3">
            <div class="col-md-auto">
              If you want to play around with different grid sizes :
              https://getbootstrap.com/docs/4.0/layout/grid/ for button styles,
              just google bootstrap buttons

              https://react-bootstrap.github.io/layout/grid/<br></br>
              https://react-bootstrap.github.io/layout/grid/<br></br>
              https://react-bootstrap.github.io/layout/grid/<br></br>
              https://react-bootstrap.github.io/layout/grid/<br></br>

              <br></br>
              you can click the code and play around, issa cool






            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
              >
                Create a Meal
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
              >
                View Meal Plans
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                data-toggle="modal"
                data-target="#basicExampleModal"
              >
                Create a Meal (this opens up a Modal, in which the user can
                input data)
              </button>

              <div
                class="modal fade"
                id="basicExampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Create a Meal Plan
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className=" py-2">
                        <div className="container">
                          <p className="lead">
                            Enter the details to get you started on your meal
                            plan!
                          </p>
                        </div>
                      </div>

                      <Container>
                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Meal Name</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Calories Intake</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Time</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Pick a date:</label>
                          </Col>
                          <Col xs lg="5">
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary">
                        Create Meal
                      </button>
                    </div>







                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="modal-body">
                      <div className=" py-2">
                        <div className="container">
                          <p className="lead">
                            Enter the details to get you started on your meal
                            plan!
                          </p>
                        </div>
                      </div>

                      <Container>
                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Meal Name</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Calories Intake</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Time</label>
                          </Col>
                          <Col xs lg="5">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl />
                            </InputGroup>
                          </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xs lg="4">
                            <label>Pick a date:</label>
                          </Col>
                          <Col xs lg="5">
                              <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                      </Container>
                    </div>




      </div>
    );
  }
}
