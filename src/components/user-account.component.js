import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';

export default class AddWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.match.params.id,
            name: 'example name',
            age: 12,
            current_weight: 420,
            weight_goal: 69,
            hasChangedDetails: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    handleChange(event) {

    }


    onSubmit(e) {

    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });


    render() {
        return (
            <div id="account-page">
                <header id="header-workout">
                    <Navbar userID={this.state.userID} /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                </header>
                <div className="account-container">
                    <div className="account">
                        <h2>Account Page Settings</h2>
                        <form onSubmit={this.onSubmit}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.userID}
                                readOnly
                            />
                            <label>Name</label> 
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                readOnly // I imagine you will pull the accounts name
                            />
                            <label>Age</label>
                            <input
                                type="text"
                                name="age"
                                onChange={this.handleChange}
                                placeholder="Enter your age"
                            />
                            <label>Current Weight</label>
                            <input
                                type="text"
                                name="current_weight"
                                
                                onChange={this.handleChange}
                                placeholder="Enter your current weight"
                            />
                            <label>Weight Goal</label>
                            <input
                                type="text"
                                name="weight_goal"
                                onChange={this.handleChange}
                                placeholder="Enter your weight goal"
                            />

                            <input type="submit" value="Save changes"></input>
                            <input type="submit" value="Cancel"></input>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}
