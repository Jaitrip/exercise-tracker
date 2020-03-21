import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../index.css";

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: "",
      duration: 0,
      caloriesBurned: 0
    };
    //recieves data from API Call via to feed into Chart
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
                            <label>Exercise Name:</label>
                            <input type="text" placeholder="Enter exercise name"></input>
                            <label>Duration (in minutes):</label>
                            <input type="text" placeholder="Enter duration"></input>
                            <label>Calories Burned:</label>
                            <input type="text" placeholder="Enter calories burned"></input>                            
                            
                            <input type="submit" value="Create Exercise"></input>
                        </form>

                    </div>
                </div>
            </div>

    );
  }
}
