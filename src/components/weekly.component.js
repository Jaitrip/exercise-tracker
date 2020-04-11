import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import moment from 'moment'
import axios from "axios"
import CalorieIntakeVisualisation from "./calorie-intake-visualisation.component";
import CalorieBurntVisualisation from "./calorie-burnt-visualisation.component";

//get all dates in a week
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

  //when object mounts, get all nessesary arrays
  componentDidMount() {
    this.getCurrentWeekCalorieIntake()
    this.getPreviousWeekCalorieIntake()
    this.getWeeklyCaloriesBurnt()
  }

  //get the weekly calories burnt
  getWeeklyCaloriesBurnt = () => {
    //get all the workouts for each day
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
          //add up the total calories for the day
          let totalCalories = 0
          response.data.forEach((workout) => {
            totalCalories = totalCalories + Number(workout.CaloriesBurnt)
          })
          //save total calories for the day
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

  //get all calories consumed for the week
  getCurrentWeekCalorieIntake = () => {
    //for each day of the week, get all the meals
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
          //add up total calories of meals for each day
          let totalCalories = 0
          response.data.forEach((meal) => {
            totalCalories = totalCalories + Number(meal.CalorieIntake)
          })
          //save total calories for the day to state
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

  //get all calories consumed for the previous week
  getPreviousWeekCalorieIntake = () => {
    //for each day of the week, get all the meals
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
          //add up total calories of meals for each day
          let totalCalories = 0
          response.data.forEach((meal) => {
            totalCalories = totalCalories + Number(meal.CalorieIntake)
          })

          //save total calories for the day to state
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
