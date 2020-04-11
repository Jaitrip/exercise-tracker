require('dotenv').config()
const mysql = require("mysql")

//initalise db connection using credentials in the .env file
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
  });

//connect to the database
connection.connect(function(error) {
    if (!!error) {
        console.log("Error can't connect " + error)
    } else {
        console.log("Connected")
    }
})

//export database connection so that it can be used in other sections
module.exports = connection