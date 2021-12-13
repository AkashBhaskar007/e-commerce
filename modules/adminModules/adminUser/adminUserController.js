require('dotenv').config()
const user = require('../../../models/user');
const User = require('../../../models/user');
const {

    showUsers, blockUserService

} = require('../adminUser/adminUserService')

exports.listUserController = async (req, res) => {
    const user = await showUsers();
    if (!user)
        return res.send({ message: 'No users registered!' })
    return res.send({
        data: user
    })
}

exports.blockUserController = async (req, res) => {
    let { id } = req.params;
    const blocky = {
        firstName:User.firstName,
        lastName:User.lastName,
        email:User.email,
        userName:User.userName,
        password:User.password,
        address:User.address,
        role:User.role
    }
    const blockUser = await blockUserService(id,blocky);
    if (!blockUser)
        return res.status(400).json({ message: "Something went wrong!" })
    return res.json({ message: "User Blocked!" })
}
