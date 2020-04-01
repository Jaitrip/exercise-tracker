import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import '../Login.css';

export default class ViewMeal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.match.params.id,
            beginingDate: new Date(),
            endingDate: new Date(),
            meals: [],
            showMeal: true,
        }

        this.onChangeBeginingDate = this.onChangeBeginingDate.bind(this);
        this.onChangeEndingDate = this.onChangeEndingDate.bind(this);
        this.handleShowMeal = this.handleShowMeal.bind(this);
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

    handleShowMeal = (event) => {
        const formattedBeginingDate = new Date(this.state.beginingDate).toISOString().slice(0, 10)
        const formattedEndingDate = new Date(this.state.endingDate).toISOString().slice(0, 10)
        axios.post(
            "http://localhost:5000/meal/getMealBetweenDates", // Example link
            {
                user_id: this.state.userID,
                start_date: formattedBeginingDate,
                end_date: formattedEndingDate
            }
        )
            .then(response => {
                const meals = response.data
                meals.forEach((meal) => {
                    const formattedMeal = {
                        mealName: meal.Name,
                        mealCalorie: meal.Calorie,
                        mealDate: new Date(meal.Date).toISOString().slice(0, 10)
                    }
                    this.setState({
                        meals: this.state.meals.concat([formattedMeal])
                    })
                })
                this.setState({
                    showMeal: true
                })
                console.log(this.state.meals)
            })
            .catch(error => {
                console.log(error)
            })
        event.preventDefault()
    }

    render() {
        if (this.state.showMeal === false) {
            return (
                <div id="view-meal-page">
                    <header id="header-view-meal">
                        <Navbar userID={this.state.userID} />
                    </header>
                    <div className="view-meal-container">
                        <div className="meals">
                            <h2>Meals</h2>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Meal Name</th>
                                        <th>Calorie intake</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                {/* <tbody>
                                {this.state.meals.map((row, index) => (
                                    <tr>
                                        <td>{row.mealName}</td>
                                        <td>{row.mealCalorie}</td>
                                        <td>{row.mealDate}</td>
                                    </tr>
                                ))}
                            </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="view-meal-page">
                    <header id="header-view-meal">
                        <Navbar userID={this.state.userID} /> {/* Note to myself: Figure out how to make navbar scroll with the page */}
                    </header>
                    <div className="view-meal-container">
                        <div className="meals">
                            <h3>View meal</h3>
                            <form className="view-meal">
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
                                <input type="submit" value="View my meals" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
