require('dotenv').config()
const {

    showUsers

} = require('../adminUser/adminUserService')

exports.listUserController = async (req, res) => {
    const user = await showUsers();
    if (!user)
        return res.send({ message: 'No users registered!' })
    return res.send({
        data: user
    })
}

