require('dotenv').config()
const {
    userDetails,
    createUser,
    userLoginService,
    userLogoutService,
    editUserProfileService
} = require('./userRegLogService');


exports.registerController = async (req, res) => {
    let { firstName, lastName, email, userName, password, address } = req.body;
    let user = await userDetails(userName);
    if (user) {
        return res.status(400).send("Username already taken, please try another")
    }
    const newUser = await createUser({ firstName, lastName, email, userName, password, address })
    if (!newUser)
        return res.json('User not registered!')
    return res.json({
        message: 'User Registered!',
        data: newUser//OrderProduct

    });
}

exports.loginController = async (req, res) => {
    let { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).send("All fields are required!")
    }
    let user = await userDetails(userName);
    if (user) {
        const userLogin = await userLoginService(userName, password)
        if (userLogin)
            return res.send({ message: "login Successful!", data: userLogin })
        return res.send("Invalid pasword!")
    }
    else {
        return res.status(401).send("User not found!")
    }
}
exports.logoutController = async (req, res) => {
    const userLogout = await userLogoutService()
    return res.send("Logout Successful!")//error

}
exports.editProfileController = async (req, res) => {
    const id = req.user.id;
    let {
        firstName,
        lastName,
        email,
        password,
        address
    } = req.body;
    const editProfile = {
        id,
        firstName,
        lastName,
        email,
        password,
        address,
    }
    const eProfile = await editUserProfileService(editProfile)
    if (!eProfile)
        return res.send('Something went wrong')
    return res.send({
        message: 'Profile edited!',
        data: editProfile
    });
}