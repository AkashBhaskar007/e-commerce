require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController,
    viewProductController
} = require('../modules/adminModules/adminController');

//RegisterAdmin
router.post('/registerAdmin', registerController);
//LoginAdmin
router.post('/loginAdmin', loginController);
//LogoutAdmin
router.post('/logoutAdmin', logoutController);
//ListItemAdmin
router.get('/viewProduct', viewProductController)
module.exports = router