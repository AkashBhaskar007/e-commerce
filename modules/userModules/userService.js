const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

//const { set, del } = require('../../redisconfig/redisconfig');

exports.userDetails = async (userName) => {
    const userData = await User.findOne({ userName })
    if (!userData)
        return false;
    return userData;
}
exports.createUser = async (params) => {
    let { firstName,
        lastName,
        email,
        userName,
        password } = params;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = User.create({
        firstName,
        lastName,
        email,
        userName,
        password: passwordHash
    });
    if (!newUser)
        return false;
    return newUser;
}