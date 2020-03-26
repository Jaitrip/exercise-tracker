import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import axios from "axios";
import "../Login.css";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {Button } from "react-bootstrap";

export default class CreateMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      mealId: "",
      mealName: "",
      caloriesIntake: 0,
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps = {
    userId: ""
  };

  onCreateMeal(e) {
    axios
      .post("http://localhost:5000/user/addNewMeal", {
        user_id: this.props.userId,
        meal_name: this.state.mealName,
        calorie_intake: this.state.caloriesIntake,
        date: this.state.date
      })
      .then(response => {
        console.log(response);
        console.log("Meal created successfully!");
        window.location = "/";
      })
      .catch(error => {
        console.log(error);
        window.location = "/mainMeals";
      });

    console.log("HELLO");
    e.preventDefault();
  }

  cancelCreateMeal(e) {
    e.preventDefault();
    window.location = "/mainMeal";
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  onChangeDate = date => {
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
            <h1 className="display-4">Create a Meal</h1>
            <p className="lead">Enter the details of your meal below!</p>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <div class="modal-body">
                <div className=" py-2">
                  <div className="container">
                    <p className="lead">Correctly fill in</p>
                  </div>
                </div>

                <Container>
                  <Row className="justify-content-md-center py-1">
                    <Col>
                      <label>Meal Name</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="mealName"
                        required
                        value={this.state.mealName}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                    </Col>
                  </Row>

                  <Row className="justify-content-md-center py-1">
                    <Col>
                      <label>Calories Intake</label>
                    </Col>
                    <Col>
                      <input
                        type="number"
                        name="caloriesIntake"
                        required
                        value={this.state.caloriesIntake}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                    </Col>
                  </Row>

                  <Row className="justify-content-md-center py-1">
                    <Col>
                      <label>Pick a date:</label>
                    </Col>
                    <Col>
                      <DatePicker
                        name="date"
                        type="date"
                        selected={this.state.startDate}
                        onChange={this.onChangeDate}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center py-2">
                    <Col>
                      <Button
                        variant="btn btn-info"
                        onClick={this.cancelCreateMeal}
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="btn btn-light btn-outline-dark"
                        onClick={this.onCreateMeal}
                      >
                        Create Meal
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
