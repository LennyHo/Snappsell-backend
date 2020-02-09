/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */


// app and dvServer are meant to get these files.
var app = require('./controller/app');
var dbServer = require('./model/databaseConfig');

// to get the live connection 
var conn = dbServer.getConnection();
dbServer.connectNow(conn);

// Port number.
var port = process.env.PORT;

// localhost
var hostname = 'localhost';

// app.listen is to display the hostname and port
app.listen(port, hostname, function () {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});


