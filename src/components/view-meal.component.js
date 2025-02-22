import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import DatePicker from 'react-datepicker';
import axios from "axios";
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';

export default class ViewMeal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.match.params.id,
            beginingDate: new Date(),
            endingDate: new Date(),
            meals: [],
            showMeal: false,
        }

        //bind methods to the object
        this.onChangeBeginingDate = this.onChangeBeginingDate.bind(this);
        this.onChangeEndingDate = this.onChangeEndingDate.bind(this);
        this.handleShowMeal = this.handleShowMeal.bind(this);
    }

    //save date changes to state 
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

    //sort meals by date
    sortByDate = (dataArray) => {
        const sortedArray = dataArray.sort((a, b) => {
          return moment(b.mealDate) - moment(a.mealDate) 
        })
        return sortedArray
    }

    handleShowMeal = (event) => {
        //get dates
        const formattedBeginingDate = moment(this.state.beginingDate).format("YYYY-MM-DD")
        const formattedEndingDate = moment(this.state.endingDate).format("YYYY-MM-DD")
        
        //get all meals between two dates
        axios.post(
            "http://localhost:5000/meal/getMealsBetweenDates",
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
                    mealName: meal.MealName,
                    mealCalorie: meal.CalorieIntake ,
                    mealDate: moment(meal.Date).format("DD/MM/YYYY")
                }
                //save meals to state
                this.setState({
                    meals: this.state.meals.concat([formattedMeal])
                })
            })
            this.setState({
                showMeal: true
            })
        })
        .catch(error => {
            console.log(error)
        })

        event.preventDefault()
    }

    render() {
        if (this.state.showMeal === true) {
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
                                <tbody>
                                {this.sortByDate(this.state.meals).map((row, index) => (
                                    <tr>
                                        <td>{row.mealName}</td>
                                        <td>{row.mealCalorie}</td>
                                        <td>{row.mealDate}</td>
                                    </tr>
                                ))}
                            </tbody>
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
                            <form onSubmit={this.handleShowMeal}>
                                <input type="submit" value="View my meals" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
