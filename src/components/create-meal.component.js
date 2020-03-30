import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import axios from "axios";
import "../Login.css";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {Button } from "react-bootstrap";
import {v4 as uuidv4} from "uuid";

export default class CreateMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID : this.props.match.params.id,
      mealName: "",
      caloriesIntake: 0,
      date: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.cancelCreateMeal = this.cancelCreateMeal.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onCreateMeal = this.onCreateMeal.bind(this);
  }

  onCreateMeal(e) {
    const formattedDate = new Date(this.state.date).toISOString().slice(0, 10)
    axios.post(
      "http://localhost:5000/meal/addNewMeal", 
      {
        meal_id : uuidv4(),
        meal_name : this.state.mealName,
        calorie_intake : this.state.caloriesIntake,
        date : formattedDate,
        user_id : this.state.userID
      })
      .then(response => {
        console.log(response);
        console.log("Meal created successfully!");
        window.location = "/createMeal/" + this.state.userID;
      })
      .catch(error => {
        console.log(error);
      });
    e.preventDefault();
  }

  cancelCreateMeal(e) {
    e.preventDefault();
    window.location = "/mainMeal/" + this.state.userID;
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
        <Navbar userID={this.state.userID}/>

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
