import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import '../Login.css';

export default class AddWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID : this.props.match.params.id,
            name: '',
            type: '',
            total_duration: 0,
            date: new Date(),
            exercises: [],
            show: false,
            currentExercise : {
                exerciseName : "",
                exerciseDuration : "",
                caloriesBurnt : ""
            }
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.onChangeDate = this.onChangeDate.bind(this); 
        this.handleExerciseChange = this.handleExerciseChange.bind(this);
        this.handleAddExercise = this.handleAddExercise.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addNewWorkout(workoutID) {
        const formattedDate = new Date(this.state.date).toISOString().slice(0, 10)
        axios.post(
            "http://localhost:5000/workout/addNewWorkout", 
            {
                workout_id : workoutID,
                name : this.state.name,
                duration :  this.state.total_duration,
                type : this.state.type,
                date : formattedDate,
                user_id : this.state.userID
            }
        )
        .then(response => {
            console.log(response)
            console.log("Workout Added")
        })
        .catch(error => {
            console.log(error)
        })
    }

    addExercises(workoutID) {
        const exercises = this.state.exercises
        exercises.forEach((exercise) => {
            axios.post(
                "http://localhost:5000/exercise/addNewExercise", 
                {
                    exercise_id : uuidv4(),
                    duration : exercise.exerciseDuration,
                    calories_burnt : exercise.caloriesBurnt,
                    workout_id : workoutID
                }
            )
            .then(response => {
                console.log(response)
                console.log("Exercise Added")
            })
            .catch(error => {
                console.log(error)
            })
        })
    }

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
        console.log(this.state.date)
    }

    onSubmit(e) {
        const workoutID = uuidv4()
        this.addNewWorkout(workoutID);
        this.addExercises(workoutID);
        e.preventDefault();
        window.location = "/workout/createWorkout/" + this.state.userID
    }   

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleExerciseChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            currentExercise: {
                ...this.state.currentExercise,
                [name] : value 
            }
        })
    }

    handleAddExercise = () => {
        this.setState({
            exercises : this.state.exercises.concat([this.state.currentExercise]),
            show : false,
            currentExercise : {
                exerciseName : "",
                exerciseDuration : "",
                caloriesBurnt : ""
            }
        })
    }

    render() {
        return (
            <div id="workout-page">
                <header id="header-workout">
                    <Navbar userID={this.state.userID}/> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                </header>
                <div className="workout-container">
                    <div className="workout">
                        <h2>Create Workout</h2>
                        <form onSubmit={this.onSubmit}>
                            <label>Workout Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Enter workout name"
                            />
                            <label>Workout Type</label>
                            <input 
                                type="text" 
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange}
                                placeholder="Enter type"
                            />
                            <label>Duration (in minutes)</label>
                            <input 
                                type="text"
                                name="total_duration"
                                value={this.state.total_duration}
                                onChange={this.handleChange} 
                                placeholder="Enter duration"
                            />
                            <label>Exercises</label>
                            {/* ======================================================= */}
                            <div className="button-exercise">
                                <Button variant="primary" onClick={this.handleShow}>
                                    Add Exercise
                             </Button>

                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Exercise</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body id="modal-content">
                                        <form>
                                            <label>Exercise Name:</label>
                                            <input 
                                                type="text" 
                                                name="exerciseName"
                                                value={this.state.currentExercise.exerciseName}
                                                onChange={this.handleExerciseChange}
                                                placeholder="Enter exercise name"
                                            />

                                            <label>Duration (in minutes):</label>
                                            <input 
                                                type="text" 
                                                name="exerciseDuration"
                                                value={this.state.currentExercise.exerciseDuration}
                                                onChange={this.handleExerciseChange}
                                                placeholder="Enter duration"
                                            />

                                            <label>Calories burned:</label>
                                            <input 
                                                type="text"
                                                name="caloriesBurnt"
                                                value={this.state.currentExercise.caloriesBurnt}
                                                onChange={this.handleExerciseChange}
                                                placeholder="Enter calories burned"
                                            />
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={this.handleAddExercise}>
                                            Add Exercise
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            {/* ======================================================= */}
                            <label>Date</label>
                            <div className="date-picker">
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                            <input type="submit" value="Create Workout"></input>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}
