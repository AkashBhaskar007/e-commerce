const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController,
    logoutController
} = require('../modules/userModules/userController');

//RegisterUser
router.post('/registerUser', registerController);
//LoginUser
router.post('/loginUser', loginController);
//LogoutUser
router.post('/logoutUser', logoutController);

//ViewProduct
router.get('./viewProduct', viewProductController)

module.exports = router