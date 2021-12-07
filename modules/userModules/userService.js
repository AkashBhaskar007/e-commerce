require('dotenv').config()

const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { set, del } = require('../../redisconfig/redisconfig');

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

exports.userLoginService = async (userName, password) => {

    let user = await User.findOne({ userName })
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            let token = jwt.sign({
                id: user._id,
                name: user.firstName,
            }, process.env.SECRET)
            await set('userToken', token)
            return token
        }

    }
    return false;
}
exports.userLogoutService = async () => {
    await del('userToken')
    return true;
}

