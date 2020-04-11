const workoutRouter = require("express").Router();
const connection = require("../database.js");

//add new workout to the database
workoutRouter.route("/addNewWorkout").post((request, result) => {
    const sqlQuery = "INSERT INTO Workout (WorkoutID, Name, Duration, Type, Date, UserUserID, CaloriesBurnt) VALUES (?)"
    const values = [
        request.body.workout_id,
        request.body.name,
        request.body.duration,
        request.body.type,
        request.body.date,
        request.body.user_id,
        request.body.calories_burnt
    ]
    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("Workout Added")
        } else {
            result.send(error)
        }
    })
})

//Get workout information by workout id
workoutRouter.route("/getWorkoutByID").get((request, result) => {
    const sqlQuery = "SELECT * FROM Workout WHERE WorkoutID = ?"
    connection.query(sqlQuery, [request.params.workout_id], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//get all workout on a certain date
workoutRouter.route("/getWorkoutByDate").post((request, result) => {
    const sqlQuery = "SELECT * FROM Workout WHERE UserUserID = ? AND Date = ?"
    const values = [
        request.body.user_id,
        request.body.date
    ]
    connection.query(sqlQuery, values, (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//get all workouts between two dates
workoutRouter.route("/getWorkoutBetweenDates").post((request, result) => {
    const sqlQuery = "SELECT * FROM Workout WHERE UserUserID = ? AND Date BETWEEN ? AND ?"
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

module.exports = workoutRouter;