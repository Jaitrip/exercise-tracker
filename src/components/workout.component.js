import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';
import { Link } from "react-router-dom";

export default class Workout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID : this.props.match.params.id,
            show: false,
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
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
                        <h3>Workout</h3>
                        <Link to={"/workout/createWorkout/" + this.state.userID}>
                            <form>
                                <input type="submit" value="Create a workout" />
                            </form>
                        </Link>
                        <Link to={"/workout/viewWorkout/" + this.state.userID}>
                            <form>
                                <input type="submit" value="View workouts" />
                            </form>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}