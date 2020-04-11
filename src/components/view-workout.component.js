import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import axios from "axios";
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';

export default class ViewWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID : this.props.match.params.id,
            beginingDate: new Date(),
            endingDate: new Date(),
            workouts: [],
            showWorkout: false,
        }

        //bind methods to object
        this.onChangeBeginingDate = this.onChangeBeginingDate.bind(this);
        this.onChangeEndingDate = this.onChangeEndingDate.bind(this);
        this.handleShowWorkout = this.handleShowWorkout.bind(this);
    }

    //save date changes to state
    onChangeBeginingDate(date) {
        this.setState({
            beginingDate: date
        });
    }

    onChangeEndingDate(date) {
        this.setState({
            endingDate: date
        });
    }

    //sort workouts by date
    sortByDate = (dataArray) => {
        const sortedArray = dataArray.sort((a, b) => {
          return moment(b.workoutDate) - moment(a.workoutDate) 
        })
        return sortedArray
    }

    handleShowWorkout = (event) => {
        //get the dates
        const formattedBeginingDate = moment(this.state.beginingDate).format("YYYY-MM-DD")
        const formattedEndingDate = moment(this.state.endingDate).format("YYYY-MM-DD")

        //get all workouts between the two dates
        axios.post(
            "http://localhost:5000/workout/getWorkoutBetweenDates", 
            {
                user_id : this.state.userID,
                start_date : formattedBeginingDate,
                end_date : formattedEndingDate
            }
        )
        .then(response => {
            const workouts = response.data
            workouts.forEach((workout) => {
                const formattedWorkout = {
                    workoutName : workout.Name,
                    workoutDuration : workout.Duration,
                    workoutCaloriesBurnt : workout.CaloriesBurnt,
                    workoutType : workout.Type,
                    workoutDate :  moment(workout.Date).format("DD/MM/YYYY")
                }
                //save the workouts to state
                this.setState({
                    workouts : this.state.workouts.concat([formattedWorkout])
                })
            })
            this.setState({
                showWorkout : true
            })
            console.log(this.state.workouts)
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault()
    }

    render() {
        if (this.state.showWorkout === true) {
            return (
                <div id="workout-page">
                    <header id="header-workout">
                        <Navbar userID={this.state.userID}/>
                    </header>
                    <div className="workout-container">
                        <div className="workout">
                            <h2>My workout list</h2>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Workout Name</th>
                                        <th>Workout Type</th>
                                        <th>Duration (in minutes)</th>
                                        <th>Calories Burnt</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.sortByDate(this.state.workouts).map((row, index) => (
                                        <tr>
                                            <td>{row.workoutName}</td>
                                            <td>{row.workoutType}</td>
                                            <td>{row.workoutDuration}</td>
                                            <td>{row.workoutCaloriesBurnt}</td>
                                            <td>{row.workoutDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="workout-page">
                    <header id="header-workout">
                        <Navbar userID={this.state.userID}/> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                    </header>
                    <div className="workout-container">
                        <div className="workout">
                            <h3>View workout</h3>
                            <form className="view-workout">
                                <label>From:</label>
                                <div className="date-picker">
                                    <DatePicker
                                        selected={this.state.beginingDate}
                                        onChange={this.onChangeBeginingDate}
                                    />
                                </div>
                                <label>To:</label>
                                <div className="date-picker">
                                    <DatePicker
                                        selected={this.state.endingDate}
                                        onChange={this.onChangeEndingDate}
                                    />
                                </div>
                            </form>
                            <form onSubmit={this.handleShowWorkout}>
                                <input type="submit" value="View my workouts" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
