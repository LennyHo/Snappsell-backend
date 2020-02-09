/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */


//  ==========================
//  process.env.NODE_ENV
//  ==========================

if (process.env.NODE_ENV === "development")
{
    require('dotenv').config({ path: ".env.development" });
}

var express = require('express');
var verifyToken = require('../auth/verifyToken');

// 
var jwt = require('jsonwebtoken');

// 
var cors = require('cors');
var app = express();


// =============
// require from model to manipulate the database in order to interact with.
// =============
const users = require('../model/user');
const books = require('../model/books');
const offers = require('../model/offers');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// =============
// middleware
// =============
app.use(bodyParser.json()); //parse appilcation/json data
app.use(urlencodedParser);
app.options('*', cors());
app.use(cors());



// Persistent login (and logout)
// app.post('/api/login', verifyToken, function (req, res) {

//     var data = {
//         username: req.body.username,
//         password: req.body.password
//     };

//     books.loginUser(data, function (err, result) {
//         if (!err)
//         {
//             // res.cookie("SESSIONID", result, {httpOnly:true, secure:true});
//             // res.cookie('token', result.token, { maxAge: result.expiresIn * 1000 })
//             res.send({ result: result.token });
//         }
//         else
//         {
//             res.status(500);
//             res.send(err.status);
//         }
//     });  
// });


// Persistent login (and logout)
app.post('/login', function (req, res) {

    var data = {
        username: req.body.username,
        password: req.body.password
    };

    users.verify(data, function (err, user) {
        if (err)
        {
            console.log(err);
            return;
        }
        else if (user === null)
        {
            res.status(401).send("user does not exist.");
            return;
        }
        else
        {
            console.log('user:', user);

            const payload = { user_id: user.id };

            // jwt.sign payload
            jwt.sign(payload, process.env.JWT_SECRET, { algorithm: "HS256" }, function (err, token) {
                if (err)
                {
                    console.log(err);
                    res.status(401).send();
                    return;
                }
                res.status(200).send({
                    token: token,
                    user_id: user.id
                });
            });
        }
    });
});


// View own listed products 
app.get('/users/listings/', verifyToken, function (req, res) {
    console.log('get method for Retrieves all listings of a given user. ');
    var statusCode = 0;
    var message = '';

    // request for the id to book.js.
    var values = {
        FK_user_id: req.userid
    };

    books.getbyIDListings(values, function (err, result) {
        if (err)
        {
            // error
            statusCode = 500;
            message = 'Internal Server Error';
        }
        else
        {
            // display the result.
            statusCode = 200;
            message = result;
        }

        // display in JSON format.
        res.status(statusCode);
        res.type('json');
        res.send(JSON.stringify(message));
    });
});


// View Offers from other users
app.get('/offers', verifyToken, function (req, res) {
    var status = 0;
    var message = '';

    // Request the id.
    var data = {
        userId: req.userid
    };

    offers.GetOffersForUser(data, function (err, result) {
        if (err)
        {
            // error
            status = 500;
            message = "Internal Server Error";
        }
        else 
        {
            // Display the result
            status = 200;
            message = result;
        }
        // Display in JSON format
        res.status(status);
        res.type('json');
        res.send(JSON.stringify(message));
    });

});


// Add product listing / inserting a new product into the listings (POST)
app.post('/AddProduct', verifyToken, function (req, res) {
    var status = 0;
    var message = '';

    // Requesting for these set of data.
    var data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        profile_pic_url: req.body.profile_pic_url,
        FK_user_id: req.userid
    };

    books.AddListings(data, function (err, result) {
        if (err)
        {
            // error
            status = 500;
            message = 'Internal Server Error';
        }
        else
        {
            // display the result.
            status = 201;
            message = { "listingID": result.insertId };
        }
        // display in JSON format. 
        res.status(status);
        res.type('json');
        res.send(JSON.stringify(message));
    });
});


// Search functionality 
app.get('/search/books', verifyToken, function (req, res) {

    var status = 0;
    var message = '';

    var data = {

        // ??
        q: req.query.q,
        FK_user_id: req.userid
    };

    // console.log(data);

    books.searchbooks(data, function (err, result) {
        if (err)
        {
            // error
            status = 500;
            message = "Internal Server Error";
        }
        else 
        {
            // Display the result
            status = 200;
            message = result;
        }
        // Display in JSON format
        res.status(status);
        res.type('json');
        res.send(JSON.stringify(message));
    });
});


// Make offer for product
app.post('/listings/offers', verifyToken, function (req, res) {
    var status = 0;
    var message = '';

    // Requesting for these set of datas.
    var data = {
        offer: req.body.offer,
        FK_user_id: req.userid,
        FK_book_id: req.body.FK_book_id
    };

    offers.AddAnOffers(data, function (err) {
        if (err)
        {
            // error 
            status = 500;
            message = 'Internal Server Error';
        }
        else
        {
            // Display the result.
            status = 201;
            message = { "Offer": req.body.offer, "fk_offeror_id": req.body.FK_user_id };
        }

        // display the output
        res.status(status);
        res.type('json');
        res.send(JSON.stringify(message));
    });
});


app.post('/users/url', verifyToken, function (req, res) {

});




// add a new user
app.post('/users/', function (req, res) {
    console.log('POST method Used to add a new user to the database. ');
    var statusCode = 0;
    var message = '';

    // to request these data from book.js.
    var data = {
        profile_pic_url: req.body.profile_pic_url,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    };

    // if the existID exists otherwise, it will display 422 for duplicate entry.
    users.ExistID(data, function (err, result) {
        if (err)
        {
            statusCode = 500;
            message = 'Internal Server Error';
            res.status(statusCode);
            res.type('json');
            res.send(JSON.stringify(message));

        }
        else if (result.length > 0)
        {
            // duplicate entry
            statusCode = 422;
            message = 'The username provided already exists';
            res.status(statusCode);
            res.type('json');
            res.send(JSON.stringify(message));
        }
        else
        {
            // insert the data
            users.insert(data, function (err, result) {
                if (err)
                {

                    // error
                    statusCode = 500;
                    message = 'Internal Server Error';
                } else
                {
                    // display sucessfully affected rows
                    statusCode = 201;
                    message = { 'userID': result.affectedRows };
                }

                // display in JSON format
                res.status(statusCode);
                res.type('json');
                res.send(JSON.stringify(message));
            });
        }
    });
});
// ===========
// export
// ===========

module.exports = app;



