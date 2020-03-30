import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../Login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class mainMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.match.params.id
    };
  }

  render() {
    return (
      <div>
        <Navbar userID={this.state.userID} />
        <div id="mainMeal-page">
          <div class="col-md-auto ">
            <h1 className="display-2 ">Meal Plans</h1>
            <h1 className="lead">Select from the options below</h1>
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
                  <Link to={"/viewMeal/" + this.state.userID}>
                    <Button
                      variant="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                    // onClick={this.handleShow}
                    >
                      View Meal
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>

          </div>
        </div>
      </div>

    );
  }
}
