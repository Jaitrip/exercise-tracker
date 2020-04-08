import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import CalorieIntakeVisualisation from "./calorie-intake-visualisation.component";
import CalorieBurntVisualisation from "./calorie-burnt-visualisation.component";

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.match.params.id,
      chartData: {},
      burntData: {}
    };
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
                  <CalorieIntakeVisualisation />
                </Col>
              </Row>
              <Row className="bg-light justify-content-md-center my-1 ">
                <Col className="col col-lg-6" >
                  <CalorieBurntVisualisation />
                </Col>
              </Row>
              </Container>  
          </Container>
        </div>
      </div>
    );
  }
}
