import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap'
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
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        //recieves data from API Call via to feed into Chart
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            total_duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newWorkout = {
            name: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(newWorkout);

        // TODO POST CALL TO DATABASE ADDING NEW WORKOUT

        window.location = '/';
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    render() {
        return (
            <div id="workout-page">
                <header id="header-workout">
                    <Navbar userID={this.state.userID}/> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                </header>
                <div className="workout-container">
                    <div className="workout">
                        <h2>Create Workout</h2>
                        <form>
                            <label>Workout Name</label>
                            <input type="text" placeholder="Enter workout name"></input>
                            <label>Workout Type</label>
                            <input type="text" placeholder="Enter type"></input>
                            <label>Duration (in minutes)</label>
                            <input type="text" placeholder="Enter duration"></input>
                            <label>Exercises</label>
                            {/* ======================================================= */}
                            <div className="button-exercise">
                                <Button variant="primary" onClick={this.handleShow}>
                                    Add Exercise
                             </Button>

                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body id="modal-content">
                                        <form>
                                            <label>Exercise Name:</label>
                                            <input type="text" placeholder="Enter exercise name"></input>
                                            <label>Duration (in minutes):</label>
                                            <input type="text" placeholder="Enter duration"></input>
                                            <label>Calories burned:</label>
                                            <input type="text" placeholder="Enter calories burned"></input>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                    </Button>

                                        <Button variant="primary" onClick={this.handleClose}>
                                            Save Changes
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
