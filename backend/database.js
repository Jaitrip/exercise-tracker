require('dotenv').config()
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
  });
  
connection.connect(function(error) {
    if (!!error) {
        console.log("Error can't connect " + error)
    } else {
        console.log("Connected")
    }
})

module.exports = connection