import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';

export default class AddWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.match.params.id,
            name: 'example name',
            current_weight: 420,
            weightGoal : 0,
            hasChangedDetails: false
        }

        //bind methods to the object
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        //when page loaded, get users details
        this.getUserDetails()
    }

    getUserDetails = () => {
        //get users name, weight and weight goal
        axios.get("http://localhost:5000/user/getUserDetails/" + this.state.userID)
        .then(response => {
            this.setState({
                name : response.data[0].Name,
                current_weight : response.data[0].Weight,
                weightGoal : response.data[0].WeightGoal
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    //save input changes to state
    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }
    
    //update current weight of the user
    onSubmit(event) {
        axios.post(
            "http://localhost:5000/user/updateWeight",
            {
                weight : this.state.current_weight,
                user_id : this.state.userID
            }
        )
        .then(response => {
            console.log(response)
            console.log("Weight Updated")
        })
        .catch(error => {
            console.log(error)
        })
        window.location = "/account/" + this.state.userID
        event.preventDefault();
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
                                readOnly
                            />
                            <label>Update your weight</label>
                            <label>{"Your current weight (in kg) is: " + this.state.current_weight}</label>
                            <input
                                type="text"
                                name="current_weight"
                                onChange={this.handleChange}
                                placeholder="Enter your weight"
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
