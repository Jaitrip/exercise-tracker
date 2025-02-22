import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import axios from "axios";
import "../style.css";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default class CreateMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.match.params.id,
      mealName: "",
      caloriesIntake: 0,
      date: new Date()
    };

    //bind methods to the object so that the methods can change state
    this.handleChange = this.handleChange.bind(this);
    this.cancelCreateMeal = this.cancelCreateMeal.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onCreateMeal = this.onCreateMeal.bind(this);
  }

  //add the meal to the database
  onCreateMeal(e) {
    const formattedDate = new Date(this.state.date).toISOString().slice(0, 10);
    axios
      .post("http://localhost:5000/meal/addNewMeal", {
        meal_id: uuidv4(),
        meal_name: this.state.mealName,
        calorie_intake: this.state.caloriesIntake,
        date: formattedDate,
        user_id: this.state.userID
      })
      .then(response => {
        console.log(response);
        console.log("Meal created successfully!");
        //if successful, take user back to the create meal page
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

  //handle change of value in input
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  //set state date
  onChangeDate(date) {
    this.setState({
      date: date
    });
  };

  render() {
    return (
      <div>
        <Navbar userID={this.state.userID} />

        <div id="createMeal-page">
          <Container>
            <div className="jumbotron-fluid  text-light py-2">
              <div className="container text-center ">
                <h1 className="display-4">Create a Meal</h1>
                <p className="lead">Enter the details of your meal below!</p>
              </div>
            </div>

            <div class="container text-light">
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <div class="modal-body">
                    <div className=" py-2">
                      <div className="container ">
                        <p className="lead">Correctly fill in</p>
                      </div>
                    </div>

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
                          selected={this.state.date}
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
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
