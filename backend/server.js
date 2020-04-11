require('dotenv').config()

//load dependencies
const express = require('express')
const mysql = require("mysql")
const cors = require('cors');

//set up app and port
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//allow cross origin requests
app.use((request, result, next) => {
    result.header('Access-Control-Allow-Origin', '*');
    next();
});

//load routes
const userRouter = require('./endpoint_routes/UserRoute');
const exerciseRouter = require('./endpoint_routes/ExerciseRoute');
const workoutRouter = require('./endpoint_routes/WorkoutRoute');
const mealRouter = require('./endpoint_routes/MealRoute');

//add routes
app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);
app.use('/workout', workoutRouter);
app.use('/meal', mealRouter);

//initalise backend server
app.listen(port, () => {
    console.log("Server running");
});