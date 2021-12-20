const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController,
    logoutController,
    editProfileController
} = require('../modules/userModules/userRegLog/userRegLogController');
const { viewProductController, orderController } = require('../modules/userModules/userProduct/userProductController');
const { redisUserTokenCheck, redisUserLoginTokenCheck } = require('../redisconfig/redisconfig');
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
//RegisterUser
router.post('/registerUser', registerController);

//LoginUser
router.post('/loginUser', redisUserLoginTokenCheck, loginController);

//LogoutUser
router.post('/logoutUser', redisUserTokenCheck, logoutController);

//EditUser
router.put('/editProfile', redisUserTokenCheck, tokenCheckMiddleware, editProfileController);

//ViewProduct
router.get('/viewProduct', redisUserTokenCheck, viewProductController);

//OrderProduct
router.post('/checkout', redisUserTokenCheck, orderController);
module.exports = router