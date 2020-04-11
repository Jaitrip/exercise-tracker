const userRouter = require("express").Router();
const connection = require("../database.js");

//get user password for login
userRouter.route("/getPassword/:user_id").get((request, result) => {
    const sqlQuery = "SELECT password FROM User WHERE UserID = ?"
    connection.query(sqlQuery, [request.params.user_id], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//get all user details
userRouter.route("/getUserDetails/:user_id").get((request, result) => {
    const sqlQuery = "SELECT * FROM User WHERE UserID = ?"
    connection.query(sqlQuery, [request.params.user_id], (error, rows, fields) => {
        if (!error) {
            result.send(rows)
        } else {
            result.send(error)
        }
    })
})

//update users weight
userRouter.route("/updateWeight").post((request, result) => {
    const sqlQuery = "UPDATE User SET Weight = ? WHERE UserID = ?"
    const values = [
        request.body.weight,
        request.body.user_id
    ]

    connection.query(sqlQuery, values, (error, res) => {
        if (!error) {
            result.send(res.affectedRows + " record(s) updated")
        } else {
            result.send(error)
        }
    })
})

//add new user to the database
userRouter.route("/addNewUser").post((request, result) => {
    const sqlQuery = "INSERT INTO User (UserID, password, Name, Age, Weight, WeightGoal) VALUES (?)"
    const values  = [
        request.body.user_id, 
        request.body.password, 
        request.body.name, 
        request.body.age, 
        request.body.weight, 
        request.body.weight_goal
    ]

    connection.query(sqlQuery, [values], (error, res) => {
        if (!error) {
            result.send("User added")
        } else {
            result.send(error)
        }
    })
})

module.exports = userRouter;