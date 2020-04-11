const exerciseRouter = require("express").Router();
const connection = require("../database.js");

//Add a new exercise to the database
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
        //If there is no error, send request results to sender
        if (!error) {
            result.send("Exercise Added")
        } else {
            result.send(error)
        }
    })
})

//Get all the exercises from a workout
exerciseRouter.route("/getExerciseByWorkout/:workout_id").get((request, result) => {
    const sqlQuery = "SELECT * FROM Exercise WHERE WorkoutWorkoutID = ?"
    connection.query(sqlQuery, [request.params.workout_id], (error, rows, fields) => {
        //If there is no error, send request results to sender
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

module.exports = exerciseRouter;