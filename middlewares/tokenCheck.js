
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.tokenCheckMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token)
        return res.json({ message: "Token is missing!" })
    const decoded = await jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
}