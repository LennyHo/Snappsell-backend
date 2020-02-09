/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */


var mysql = require('mysql');

// MYSQL database information

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


var dbConnect = {

    // database information
    connection: null,
    getConnection: function () {
        var conn = mysql.createConnection({
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });
        this.connection = conn;
        return conn;
    },

    // The main function of 'connectNow' is to check if the connection sucessful.
    connectNow: function (connection) {
        connection.connect(function (err) {
            if (err)
            {
                console.log(err);
            } else
            {
                console.log('dbconnection is sucessful.');
            }
        });
    }
};


// exporting the dbconnect for other files.
module.exports = dbConnect;