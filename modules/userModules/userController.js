require('dotenv').config()
const {
    userDetails,
    createUser,
    userLoginService,
    userLogoutService
} = require('./userService')

exports.registerController = async (req, res) => {
    let { firstName, lastName, email, userName, password } = req.body;
    if (!firstName || !lastName || !email || !userName || !password) {
        return res.status(400).json({ message: "All fields have not been entered!" })
    }
    let user = await userDetails(userName);
    if (user) {
        return res.status(400).json({ message: "Username already taken, please try another" })
    }
    const newUser = await createUser({ firstName, lastName, email, userName, password })
    if (!newUser)
        return res.json({ message: 'User not registered!' })
    return res.json({
        message: 'User Registered!',
        data: newUser
    });
}