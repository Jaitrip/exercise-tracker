import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import "react-datepicker/dist/react-datepicker.css";
import '../Login.css';
import CreateWorkout from "./create-workout.component"
import ViewWorkout from "./view-workout.component"

export default class Workout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            total_duration: 0,
            date: new Date(),
            exercises: [],
            show: false,
            isView: false,
            isCreateWorkout: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        //recieves data from API Call via to feed into Chart

        this.handleView = this.handleView.bind(this);
        this.handleCreateWork = this.handleCreateWork.bind(this);
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

    handleCreateWork = () => this.setState({ isCreateWorkout: true });
    handleView = () => this.setState({ isView: true });

    render() {

        if (this.state.isCreateWorkout === true) {
            return (
                <CreateWorkout />
            )
        } if (this.state.isView === true) {
            return (
                <ViewWorkout />
            )
        } else {
            return (
                <div id="workout-page">
                    <header id="header-workout">
                        <Navbar /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                    </header>
                    <div className="workout-container">
                        <div className="workout">
                            <h3>Workout</h3>
                            <form onSubmit={this.handleCreateWork}>
                                <input type="submit" value="Create a workout" />
                            </form>
                            <form onSubmit={this.handleView}>
                                <input type="submit" value="View workouts" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}