require('dotenv').config()
const user = require('../../../models/user');
const User = require('../../../models/user');
const {

    showUsers, blockUserService

} = require('../adminUser/adminUserService')

exports.listUserController = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const user = await showUsers(startIndex, endIndex);
    if (!user)
        return res.send({ message: 'No users registered!' })
    return res.send({
        data: user
    })
}

exports.blockUserController = async (req, res) => {
    let { id } = req.params;
    const blocky = {
        firstName: User.firstName,
        lastName: User.lastName,
        email: User.email,
        userName: User.userName,
        password: User.password,
        address: User.address,
        role: User.role
    }
    const blockUser = await blockUserService(id, blocky);
    if (!blockUser)
        return res.status(400).json({ message: "Something went wrong!" })
    return res.json({ message: "User Blocked!" })
}
