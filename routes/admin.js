const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController,
    logoutController
} = require('../modules/adminController');

//RegisterAdmin
router.post('/registerAdmin', registerController);
//LoginAdmin
router.post('/loginAdmin', loginController);
//LogoutAdmin
router.post('/logoutAdmin', logoutController);

module.exports = router