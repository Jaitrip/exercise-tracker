import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../Login.css';



export default class AddWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            total_duration: 0,
            date: new Date(),
            exercises: []
        }
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

    render() {
        return (
            <div id="workout-page">
                <header id="header-workout">
                    <Navbar /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
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
                            <input type="text" placeholder="Change this. Maybe add a table where user can see all the exercises available and select them"></input>
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

/*{ <body id="main-page">
    <Navbar />
    <h3>Create New Workout</h3>
    <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Workout Name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
            />
        </div>
        <div className="form-group">
            <label>Type: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
            />
        </div>
        <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
            />
        </div>
        <div className="form-group">
            <label>Date: </label>
            <div>
                {<DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                />}
            </div>
        </div>

        <div className="form-group">
            <input type="submit" value="Create workout" className="btn btn-primary" />
        </div>
    </form>
</body> }*/

