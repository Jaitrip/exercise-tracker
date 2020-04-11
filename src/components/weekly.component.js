import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import moment from 'moment'
import axios from "axios"
import CalorieIntakeVisualisation from "./calorie-intake-visualisation.component";
import CalorieBurntVisualisation from "./calorie-burnt-visualisation.component";

function getCurrentDates(startDate) {
  let datesOfWeek = []
  for(let i = 0; i < 7; i++) {
    let day = moment(startDate).add(i, 'd').format("YYYY-MM-DD")
    datesOfWeek.push(day)
  }
  return datesOfWeek
}

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.match.params.id,
      currentWeekDates: getCurrentDates(moment().startOf("isoWeek").format("YYYY-MM-DD")),
      previousWeekDates: getCurrentDates(moment().subtract(7, 'd').startOf("isoWeek").format("YYYY-MM-DD")),
      currentWeekCaloriesBurnt: [],
      currentWeekCalorieIntake: [],
      previousWeekCalorieIntake: []
    }
  }

  componentDidMount() {
    this.getCurrentWeekCalorieIntake()
    this.getPreviousWeekCalorieIntake()
    this.getWeeklyCaloriesBurnt()
  }

  getWeeklyCaloriesBurnt = () => {
    this.state.currentWeekDates.forEach((day) => {
      axios.post(
        "http://localhost:5000/workout/getWorkoutByDate",
        {
          user_id: this.state.userID,
          date: day 
        }
      )
      .then((response) => {
        if (response.data != null) {
          let totalCalories = 0
          response.data.forEach((workout) => {
            totalCalories = totalCalories + Number(workout.CaloriesBurnt)
          })
          this.setState({
            currentWeekCaloriesBurnt : [...this.state.currentWeekCaloriesBurnt, [day, totalCalories]]
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
    })
  }

  getCurrentWeekCalorieIntake = () => {
    this.state.currentWeekDates.forEach((day) => {
      axios.post(
        "http://localhost:5000/meal/getMealsByDate", 
        {
          user_id: this.state.userID,
          date: day 
        }
      )
      .then((response) => {
        if (response.data != null) {
          let totalCalories = 0
          response.data.forEach((meal) => {
            totalCalories = totalCalories + Number(meal.CalorieIntake)
          })
          this.setState({
            currentWeekCalorieIntake : [...this.state.currentWeekCalorieIntake, [day, totalCalories]]
          })
        }
      })
      .catch(error => {
          console.log(error)
      })
    })
  }

  getPreviousWeekCalorieIntake = () => {
    this.state.previousWeekDates.forEach((day) => {
      axios.post(
        "http://localhost:5000/meal/getMealsByDate", 
        {
          user_id: this.state.userID,
          date: day 
        }
      )
      .then((response) => {
        if (response.data != null) {
          let totalCalories = 0
          response.data.forEach((meal) => {
            totalCalories = totalCalories + Number(meal.CalorieIntake)
          })

          this.setState({
            previousWeekCalorieIntake : [...this.state.previousWeekCalorieIntake, [day, totalCalories]]
          })
        }
      })
      .catch(error => {
          console.log(error)
      })
    })
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
                  <CalorieIntakeVisualisation 
                    currentWeekCalories = {this.state.currentWeekCalorieIntake}
                    previousWeekCalories = {this.state.previousWeekCalorieIntake}
                  />
                </Col>
              </Row>
              <Row className="bg-light justify-content-md-center my-1 ">
                <Col className="col col-lg-6" >
                  <CalorieBurntVisualisation 
                    calorieIntake={this.state.currentWeekCalorieIntake}
                    caloriesBurnt={this.state.currentWeekCaloriesBurnt}
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
