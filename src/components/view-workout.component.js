import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import '../Login.css';

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

        this.onChangeBeginingDate = this.onChangeBeginingDate.bind(this);
        this.onChangeEndingDate = this.onChangeEndingDate.bind(this);
        this.handleShowWorkout = this.handleShowWorkout.bind(this);
    }

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

    handleShowWorkout = (event) => {
        const formattedBeginingDate = new Date(this.state.beginingDate).toISOString().slice(0, 10)
        const formattedEndingDate = new Date(this.state.endingDate).toISOString().slice(0, 10)
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
                    workoutType : workout.Type,
                    workoutDate :  new Date(workout.Date).toISOString().slice(0, 10)
                }
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
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.workouts.map((row, index) => (
                                        <tr>
                                            <td>{row.workoutName}</td>
                                            <td>{row.workoutType}</td>
                                            <td>{row.workoutDuration}</td>
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
