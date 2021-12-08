
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.tokenCheckMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token)
        return res.json({ message: "Not logged in!" })
     next();
}