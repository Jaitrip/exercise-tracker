const exerciseRouter = require("express").Router();
const connection = require("../database.js");

exerciseRouter.route("/addNewExercise").post((request, result) => {
    const sqlQuery = "INSERT INTO Exercise (ExerciseID, Duration, CaloriesBurnt, WorkoutWorkoutID, ExerciseName) VALUES (?)"
    const values = [
        request.body.exercise_id,
        request.body.duration,
        request.body.calories_burnt,
        request.body.workout_id,
        request.body.exercise_name,
    ]
    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("Exercise Added")
        } else {
            result.send(error)
        }
    })
})

exerciseRouter.route("/getExerciseByWorkout").get((request, result) => {
    const sqlQuery = "SELECT * FROM Exercise WHERE WorkoutWorkoutID = ?"
    connection.query(sqlQuery, [request.params.workout_id], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

module.exports = exerciseRouter;