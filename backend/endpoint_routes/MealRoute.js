const mealRouter = require("express").Router();
const connection = require("../database.js");

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

mealRouter.route("/getMealsByDate").post((request, result) => {
    const sqlQuery = "SELECT * FROM Meal WHERE UserUserID = ? AND Date = ?"
    const values = [
        request.body.user_id,
        request.body.date
    ]

    connection.query(sqlQuery, values, (error, rows) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

mealRouter.route("/getMealsBetweenDates").post((request, result) => {
    const sqlQuery = "SELECT * FROM Meal WHERE UserUserID = ? AND Date BETWEEN ? AND ?"
    const values = [
        request.body.user_id,
        request.body.start_date,
        request.body.end_date
    ]
    connection.query(sqlQuery, values, (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

mealRouter.route("/addNewMeal").post((request, result) => {
    const sqlQuery = "INSERT INTO Meal (MealID, MealName, CalorieIntake, Date, UserUserID) VALUES (?)"
    const values = [
        request.body.meal_id,
        request.body.meal_name,
        request.body.calorie_intake,
        request.body.date,
        request.body.user_id
    ]
    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("Meal added")
        } else {
            result.send(error)
        }
    })
})

module.exports = mealRouter;