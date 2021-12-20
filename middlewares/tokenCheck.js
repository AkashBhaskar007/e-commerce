
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.tokenCheckMiddleware = async (req, res, next) => {
    const authorization = req.headers.authorization;
    let result;
    if (authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            result = jwt.verify(token, process.env.SECRET)
            req.decoded = result;
            console.log(result);
            next();
        } catch (err) {
            console.log(err)
            res.status(500).json("Invalid token");
        }
    }
    else {
       
        res.status(401).send('Token required');
    }
}



