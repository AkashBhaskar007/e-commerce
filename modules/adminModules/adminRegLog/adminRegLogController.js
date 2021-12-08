require('dotenv').config()

const {
    adminDetails,
    createAdmin,
    adminLoginService,
    adminLogoutService,
} = require('../adminRegLog/adminRegLogService')

exports.registerController = async (req, res) => {
    let { firstName, lastName, userName, password, role } = req.body;
    if (!firstName || !lastName || !userName || !password) {
        return res.status(400).json({ message: "All fields have not been entered!" })
    }
    let admin = await adminDetails(userName);
    if (admin) {
        return res.status(400).json({ message: "Username already taken, please try another" })
    }
    const newAdmin = await createAdmin({ firstName, lastName, userName, password })
    if (!newAdmin)
        return res.json({ message: 'Admin not registered!' })
    return res.json({
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
        const adminLogin = await adminLoginService(userName, password)
        if (adminLogin)
            return res.json({ message: "login Successful!", data: adminLogin })
        return res.json({ message: "Invalid pasword!" })
    }
    else {
        return res.status(401).json({ message: "Admin not found!" })
    }
}
exports.logoutController = async (req, res) => {
    const adminLogout = await adminLogoutService()
    return res.json({ message: "Logout Successful!" })

}

