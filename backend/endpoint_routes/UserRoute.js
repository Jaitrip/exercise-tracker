const userRouter = require("express").Router();
const connection = require("../database.js");

userRouter.route("/getPassword/:userid").get((request, result) => {
    console.log("Request recieved")
    const sqlQuery = "SELECT password FROM User WHERE UserID = ?"
    connection.query(sqlQuery, [request.params.userid], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
            console.log("Results sent")
        } else {
            console.log(error)
        }
    })
})

userRouter.route("/getUserDetails/:userid").get((request, result) => {
    const sqlQuery = "SELECT * FROM User WHERE UserID = ?"
    connection.query(sqlQuery, [request.params.userid], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            console.log(error)
        }
    })
})

userRouter.route("/updateWeight").post((request, result) => {
    const sqlQuery = "UPDATE User SET Weight = ? WHERE UserID = ?"
    const values = [
        request.body.weight,
        request.body.userid
    ]

    connection.query(sqlQuery, values, (error, res) => {
        if (!error) {
            result.send(res.affectedRows + " record(s) updated")
        } else {
            console.log(error)
        }
    })
})

userRouter.route("/addNewUser").post((request, result) => {
    const sqlQuery = "INSERT INTO User (UserID, password, Name, Age, Weight, WeightGoal) VALUES (?)"
    const values  = [
        request.body.userid, 
        request.body.password, 
        request.body.name, 
        request.body.age, 
        request.body.weight, 
        request.body.weightgoal
    ]

    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("User added")
        } else {
            console.log(error)
        }
    })
})

module.exports = userRouter;