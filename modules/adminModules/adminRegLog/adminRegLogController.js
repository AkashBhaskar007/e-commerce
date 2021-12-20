require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../../../models/admin');
const { set, del, get } = require('../../../redisconfig/redisconfig');

const {
    adminDetails,
    createAdmin,
    adminLoginService,
    adminLogoutService,
} = require('../adminRegLog/adminRegLogService')


exports.registerController = async (req, res) => {
    let { firstName, lastName, userName, password } = req.body;
    //use validation
    if (!firstName || !lastName || !userName || !password) {
        return res.status(400).send("All fields have not been entered!")
    }
    let admin = await adminDetails(userName);
    if (admin) {
        return res.status(400).send("Username already taken, please try another")
    }
    const newAdmin = await createAdmin({ firstName, lastName, userName, password })
    if (!newAdmin)
        return res.send('Admin not registered!')
    return res.send({
        message: 'Admin Registered!',
        data: newAdmin
    });
}
exports.loginController = async (req, res) => {
    let { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ message: "All fields are required!" })
    }
    let user = await adminDetails(userName);
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            let token = jwt.sign({
                id: user._id,
                name: user.firstName,
                role: user.role
            }, process.env.SECRET)
            await set('adminToken', token)
            return res.json({ message: "login Successful!", data: token })
        } else
            return res.json({ message: "Invalid pasword!" })


    } //const adminLogin = await adminLoginService(userName, password)
    else {
        return res.status(401).json({ message: "Admin not found!" })
    }
}
exports.logoutController = async (req, res) => {
    const adminLogout = await adminLogoutService();
    return res.json("Logout Successful!")

}

