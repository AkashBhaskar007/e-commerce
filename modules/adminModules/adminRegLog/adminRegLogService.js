require('dotenv').config()
const Admin = require('../../../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { set, del, get } = require('../../../redisconfig/redisconfig');

exports.adminDetails = async (userName) => {
    const userData = await Admin.findOne({ userName })
    if (!userData)
        return false;
    return userData;
}
exports.createAdmin = async (params) => {
    let { firstName,
        lastName,
        userName,
        password,
    } = params;
    const passwordHash = await bcrypt.hash(password, 10);
    const newAdmin = Admin.create({
        firstName,
        lastName,
        userName,
        password: passwordHash,
        role: 'Admin'

    });
    if (!newAdmin)
        return false;
    return newAdmin;
}
exports.adminLoginService = async (userName, password) => {

    let user = await Admin.findOne({ userName })
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            let token = jwt.sign({
                id: user._id,
                name: user.firstName,
                role: user.role
            }, process.env.SECRET)
            await set('adminToken', token)
            return token
        }

    }
    return false;
}
exports.adminLogoutService = async () => {
    await del('adminToken')
    return true;
}



