import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../Login.css";
import {Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class mainMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID : this.props.match.params.id
    };
  }

  render() {
    return (
      <div>
        <Navbar userID={this.state.userID}/>
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
                  <Link to={"/createMeal/" + this.state.userID}>
                    <Button
                        variant="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                      >
                        Create a Meal
                    </Button>
                  </Link>
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
