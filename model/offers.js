/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */


// it is to get the file. 
var db = require('./databaseConfig.js');
// var cors = require('cors');
// var app = express();



var offers = {

    // 
    GetAllOffers: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'SELECT * FROM offers WHERE FK_user_id = ?';

        var values = [
            data.FK_user_id
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

    GetOffersForUser: function (data, callback) {
        var sqlCmd = "select b.title, o.offer, u.username from books b inner join offers o inner join users u on b.id = o.FK_book_id and o.FK_user_id = u.id where b.FK_user_id = ?";

        var values = [
            data.userId
        ];

        db.connection.query(sqlCmd, values, function (err, result) {
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

    // 
    AddAnOffers: function (data, callback) {

        // SQL command to interact with database
        var sqlCmd = 'INSERT INTO offers (offer, FK_user_id, FK_book_id) VALUES (? ,?, ?)';
        var values = [
            data.offer,
            data.FK_user_id,
            data.FK_book_id
        ];

        db.connection.query(sqlCmd, values, function (err, result) {
            if (err)
            {
                // error
                console.log(err);
                return callback(err, null);

            } else
            {
                //result
                console.log(result);
                return callback(null, result);
            }
        });
    },

};

module.exports = offers;