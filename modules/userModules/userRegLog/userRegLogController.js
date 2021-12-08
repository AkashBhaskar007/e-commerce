require('dotenv').config()
const {
    userDetails,
    createUser,
    userLoginService,
    userLogoutService
} = require('./userService')

exports.registerController = async (req, res) => {
    let { firstName, lastName, email, userName, password, address } = req.body;
    if (!firstName || !lastName || !email || !userName || !password || !address) {
        return res.status(400).json({ message: "All fields have not been entered!" })
    }
    let user = await userDetails(userName);
    if (user) {
        return res.status(400).json({ message: "Username already taken, please try another" })
    }
    const newUser = await createUser({ firstName, lastName, email, userName, password, address })
    if (!newUser)
        return res.json({ message: 'User not registered!' })
    return res.json({
        message: 'User Registered!',
        data: newUser
    });
}

exports.loginController = async (req, res) => {
    let { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ message: "All fields are required!" })
    }
    let user = await userDetails(userName);
    if (user) {
        const userLogin = await userLoginService(userName, password)
        if (userLogin)
            return res.json({ message: "login Successful!", data: userLogin })
        return res.json({ message: "Invalid pasword!" })
    }
    else {
        return res.status(401).json({ message: "User not found!" })
    }
}
exports.logoutController = async (req, res) => {
    const userLogout = await userLogoutService()
    return res.json({ message: "Logout Successful!" })

}
