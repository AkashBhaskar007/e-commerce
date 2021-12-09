const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController,
    logoutController,
} = require('../modules/userModules/userRegLog/userRegLogController');
const {
    viewProductController
} = require('../modules/userModules/userProduct/userProductController');
const { redisUserTokenCheck } = require('../redisconfig/redisconfig');
//RegisterUser
router.post('/registerUser', registerController);
//LoginUser
router.post('/loginUser', loginController);
//LogoutUser
router.post('/logoutUser', redisUserTokenCheck, logoutController);

//ViewProduct
router.get('/viewProduct', redisUserTokenCheck, viewProductController)

module.exports = router