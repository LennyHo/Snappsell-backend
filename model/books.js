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



// books table
var books = {
    // loginUser: function (data, callback) {

    //     var sql = 'select * from users where username=? and password=?';

    //     var values = [
    //         data.username,
    //         data.password
    //     ];

    //     db.connection.query(sql, values, function (err, result) {
    //         if (err)
    //         {
    //             console.log(err);
    //             return callback(err, null);
    //         }
    //         else
    //         {
    //             var token = "";
    //             if (result.length == 1)
    //             {
    //                 var expiresIn = 86400;
    //                 token = jwt.sign({ id: result[0].username, role: result[0].role }, config.key, {
    //                     expiresIn
    //                 });    //expires in 24 hrs

    //                 console.log(token);
    //             }

    //             return callback(null, { token, expiresIn });
    //         }
    //     });
    // },


    getbyIDListings: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'SELECT * FROM snapsell2.books where FK_user_id = ?';

        var id = [
            data.FK_user_id
        ];

        db.connection.query(sqlCmd, [id], function (err, result) {
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


    AddListings: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'INSERT INTO books(title, description ,price ,profile_pic_url, FK_user_id) VALUES (?,?,?,?,?)';

        var id = [
            data.title,
            data.description,
            data.price,
            data.profile_pic_url,
            data.FK_user_id
        ];

        db.connection.query(sqlCmd, id, function (err, result) {
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


    // 9) 
    deletelistings: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'DELETE FROM books WHERE id = ?';

        var values = [
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
    },


    // 10
    updateslistings: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'UPDATE books SET title = ?, description = ?, price = ?, FK_user_id = ? WHERE id = ?';

        var values = [
            data.title,
            data.description,
            data.price,
            data.FK_user_id,
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
    },

    searchbooks: function (data, callback) {

        var sqlcmd = "select * from books where title like ? and FK_user_id != ?";

        // SELECT * FROM post WHERE text_body LIKE '%?%'

        var values = [
            '%' + data.q + '%',
            data.FK_user_id
        ];

        db.connection.query(sqlcmd, values, function (err, result) {
            if (err)
            {
                console.log(err);
                return callback(err, null);
            }
            else
            {
                console.log(result);
                return callback(null, result);
            }
        });
    }
};




// exporting the user.
module.exports = books;
