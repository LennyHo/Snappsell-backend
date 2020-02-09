/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */

var jwt = require('jsonwebtoken');

// dotenv is to allow the process.env to function from .env.development
if (process.env.NODE_ENV === "development")
{
    require('dotenv').config({ path: ".env.development" });
}


function verifyToken(req, res, next) {
    // console.log('cookies:', req.cookies);

    var token = req.headers['authorization']; //retrieve authorization header's content
    console.log('token:', token);

    if (!token || !token.includes('Bearer'))
    { //process the token

        res.status(403);
        return res.send({ auth: 'false', message: 'Not authorized!' });
    }

    else

    {
        token = token.split('Bearer ')[1]; //obtain the token’s value

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {//verify token
            if (err)
            {
                res.status(403);
                return res.send({ auth: false, message: 'Not authorized!' });
            }
            else
            {
                console.log("----------</verifyToken.js ::verifyToken-----------------");
                // req.userid = decoded.user_id is the params which will automatically given a token
                console.log("userid: " + decoded.user_id);
                // console.log("decoded: " + JSON.stringify(decoded));
                console.log("----------</verifyToken.js ::verifyToken-----------------");

                req.userid = decoded.user_id; //decode the role and store in req for use
                next();
            }

        });
    }
}

module.exports = verifyToken;