import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap'
import '../Login.css';

// const Workout = props => (
//     <tr>
//       <td>{props.workout.username}</td>
//       <td>{props.workout.description}</td>
//       <td>{props.workout.duration}</td>
//       <td>{props.workout.date.substring(0,10)}</td>
//       <td>
//         <Link to={"/edit/"+props.workout._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//       </td>
//     </tr>
//   ) /* I forgot how to do this btw LMAO */

export default class ViewWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            total_duration: 0,
            date: new Date(),
            exercises: [],
            showWorkout: false,
        }

        // this.handleClose = this.handleClose.bind(this);
        // this.handleShow = this.handleShow.bind(this);
        //recieves data from API Call via to feed into Chart

        this.handleShowWorkout = this.handleShowWorkout.bind(this);
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

    // handleClose = () => this.setState({ show: false });
    // handleShow = () => this.setState({ show: true });

    handleShowWorkout = () => this.setState({ showWorkout: true });

    render() {


        if (this.state.showWorkout === true) {
            return (
                <div id="workout-page">
                    <header id="header-workout">
                        <Navbar /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                    </header>
                    <div className="workout-container">
                        <div className="workout">
                            <h2>My workout list</h2>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Username</th>
                                        <th>Description</th>
                                        <th>Duration (in minutes)</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.workoutList()} */}
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
                        <Navbar /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                    </header>
                    <div className="workout-container">
                        <div className="workout">
                            <h3>View workout</h3>
                            <form className="view-workout">
                                <label>From:</label>
                                <div className="date-picker">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                                <label>To:</label>
                                <div className="date-picker">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
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
