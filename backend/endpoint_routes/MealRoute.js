const mealRouter = require("express").Router();
const connection = require("../database.js");

//Get meal by meal id
mealRouter.route("/getMealInfo/:meal_id").get((request, result) => {
    const sqlQuery = "SELECT * FROM Meal WHERE MealID = ?"
    connection.query(sqlQuery, [request.params.meal_id], (error, rows) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//Get all meals on a particular day
mealRouter.route("/getMealsByDate").post((request, result) => {
    const sqlQuery = "SELECT * FROM Meal WHERE UserUserID = ? AND Date = ?"
    // request takes the user id and the date
    const values = [
        request.body.user_id,
        request.body.date
    ]

    //if there is no errors, the query results are sent to the requester
    connection.query(sqlQuery, values, (error, rows) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//Get all meals between two dates
mealRouter.route("/getMealsBetweenDates").post((request, result) => {
    const sqlQuery = "SELECT * FROM Meal WHERE UserUserID = ? AND Date BETWEEN ? AND ?"
    //query takes userid and two dates
    const values = [
        request.body.user_id,
        request.body.start_date,
        request.body.end_date
    ]

    //if there is no errors, the query results are sent to the requester
    connection.query(sqlQuery, values, (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//add a new meal to the database
mealRouter.route("/addNewMeal").post((request, result) => {
    const sqlQuery = "INSERT INTO Meal (MealID, MealName, CalorieIntake, Date, UserUserID) VALUES (?)"
    const values = [
        request.body.meal_id,
        request.body.meal_name,
        request.body.calorie_intake,
        request.body.date,
        request.body.user_id
    ]

    //if meal successfully added, confirmation sent to the user
    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("Meal added")
        } else {
            result.send(error)
        }
    })
})

module.exports = mealRouter;