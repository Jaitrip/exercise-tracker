require('dotenv').config()

const express = require('express')
const mysql = require("mysql")
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use((request, result, next) => {
    result.header('Access-Control-Allow-Origin', '*');
    next();
});

const userRouter = require('./endpoint_routes/UserRoute');
const exerciseRouter = require('./endpoint_routes/ExerciseRoute');
const workoutRouter = require('./endpoint_routes/WorkoutRoute');
const mealRouter = require('./endpoint_routes/MealRoute');

app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);
app.use('/workout', workoutRouter);
app.use('/meal', mealRouter);

app.listen(port, () => {
    console.log("Server running");
});