require('dotenv').config()
const Admin = require('../../models/admin');
const Product = require('../../models/product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { set, del } = require('../../redisconfig/redisconfig');

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
        role } = params;
    const passwordHash = await bcrypt.hash(password, 10);
    const newAdmin = Admin.create({
        firstName,
        lastName,
        userName,
        password: passwordHash,
        role
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

exports.showProductService = async () => {
    const product = await Product.find()
    if (!product)
        return false;
    return product;
}