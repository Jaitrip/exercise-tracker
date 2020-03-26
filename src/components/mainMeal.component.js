import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../Login.css";

import { InputGroup, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Modal, Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";

export default class mainMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    //recieves data from API Call via to feed into Chart

    this.handleChange = this.handleChange.bind(this);
  }

  CreateMeal(e) {
    e.preventDefault();
    window.location = "/createMeal";
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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
              <Container>
                <Row className="justify-content-md-center">
                  <Col>
                    <Button
                      variant="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                      onClick={this.CreateMeal}
                    >
                      Create a Meal
                    </Button>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col>
                    <Button
                      variant="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                      onClick={this.handleShow}
                    >
                      Add Meal (Open Modal)
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Create a Meal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body id="modal-content">
                        <div class="modal-body">
                          <div className=" py-2">
                            <div className="container">
                              <p className="lead">
                                Enter the details of your meal!
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
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="btn btn-info"
                          onClick={this.handleClose}
                        >
                          Cancel
                        </Button>

                        <Button
                          variant="btn btn-light btn-outline-dark"
                          onClick={this.handleClose}
                        >
                          Create Meal
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col>
                    <Button
                      variant="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                      // onClick={this.handleShow}
                    >
                      View Meal
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
