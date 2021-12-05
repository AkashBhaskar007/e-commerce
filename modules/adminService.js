const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        password } = params;
    const passwordHash = await bcrypt.hash(password, 10);
    const newAdmin = Admin.create({
        firstName,
        lastName,
        userName,
        password: passwordHash
    });
    if (!newAdmin)
        return false;
    return newAdmin;
}
exports.adminLoginService = async (userName, password) => {

    let admin = await Admin.findOne({ userName })
    if (admin) {
        const passwordCheck = await bcrypt.compare(password, admin.password);
        if (passwordCheck) {
            let token = jwt.sign({
                id: admin._id,
                name: admin.firstName,
            }, process.env.SECRET)
            return token;

        } return false;
    }
}