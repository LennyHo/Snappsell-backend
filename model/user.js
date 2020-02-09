/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */


// it is to get the file. 
var db = require('./databaseConfig.js');
var jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const saltRounds = 10;



// user tablej
var user = {

    verify: function (data, callback) {
        var sqlcmd = "SELECT * FROM users WHERE username = ? LIMIT 1";

        db.connection.query(sqlcmd, [data.username], function (err, result) {
            
            if (err)
            {
                console.log(err);
                return callback(err, null);
            }


            if (result.length == 0)
            {
                console.log("User does not exist");
                return callback(null, null);
            }


            // bcrypt
            const user = result[0];
            bcrypt.compare(data.password, user.password, function (err, result) {
                if (err)
                {
                    console.log(err);
                    return callback(err, null);
                }
                if (!result)
                {
                    return callback(null, null);
                }
                callback(null, user);
            });
        });

    },

    // loginUser: function (data, callback) {

    //     var sql = 'select * from users where username= ? and password= ?';

    //     var values = [
    //         data.username,
    //         data.password
    //     ];

    //     db.connection.query(sql, values, function (err, result) {
    //         if (err)
    //         {
    //             console.log(err);
    //             return callback(err, null);
    //         } else
    //         {
    //             var token = "";
    //             if (result.length == 1)
    //             {
    //                 var expiresIn = 86400;
    //                 token = jwt.sign({ id: result[0].username, role: result[0].role }, config.key, {
    //                     expiresIn    //expires in 24 hrs
    //                 });
    //                 console.log(token);

    //             }
    //             return callback(null, { token, expiresIn });
    //         }
    //     });
    // },


    // if the username exists (Q2 & Q4)
    ExistID: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'SELECT username FROM users WHERE username = ?';

        var values = [
            data.username
        ];

        db.connection.query(sqlCmd, values, function (err, result) {
            if (err)
            {
                // error
                console.log(err);
                return callback(err, null);
            }
            else
            {
                //result
                console.log(result);
                return callback(null, result);
            }

        });
    },

    // 1) 
    getAll: function (callback) {

        // SQL command to interact with database
        var sqlCmd = 'SELECT * FROM users';

        db.connection.query(sqlCmd, [], function (err, result) {
            if (err)
            {
                // error
                console.log(err);
                return callback(err, null);

            }
            else
            {
                //result
                console.log(result);
                return callback(null, result);
            }
        });
    },


    // 2) 
    insert: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'INSERT INTO users (profile_pic_url, username, password, role) VALUES (?, ?, ?, ?)';

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(data.password, salt, function (err, hash) {
                var id = [
                    data.profile_pic_url,
                    data.username,
                    hash,
                    data.role
                ];
                db.connection.query(sqlCmd, id, function (err, result) {
                    if (err)
                    {
                        console.log(err);
                        return callback(err, null);

                    } else
                    {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            });
        });
    },


    // 3) 
    getID: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'SELECT * from users WHERE id = ?';

        var id = [
            data.id
        ];

        db.connection.query(sqlCmd, [id], function (err, result) {
            if (err)
            {
                console.log(err);
                return callback(err, null);
            } else
            {
                console.log(result);
                return callback(null, result);
            }
        });
    },


    // 4) 
    updateID: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = ' UPDATE user SET profile_pic_url = ?, username = ? WHERE id = ? ';


        var values = [
            data.profile_pic_url,
            data.username,
            data.id
        ];

        db.connection.query(sqlCmd, values, function (err, result) {
            if (err)
            {
                // error
                console.log(err);
                return callback(err, null);
            }
            else
            {
                //result
                console.log(result);
                return callback(null, result);
            }
        });
    }
};

// exporting the user.
module.exports = user;
