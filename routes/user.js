const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController,
    logoutController,
    editProfileController
} = require('../modules/userModules/userRegLog/userRegLogController');
const { viewProductController } = require('../modules/userModules/userProduct/userProductController');
const { redisUserTokenCheck,redisUserLoginTokenCheck } = require('../redisconfig/redisconfig');
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
//RegisterUser
router.post('/registerUser', registerController);

//LoginUser
router.post('/loginUser', redisUserLoginTokenCheck,loginController);

//LogoutUser
router.post('/logoutUser', redisUserTokenCheck, logoutController);

//EditUser
router.put('/editProfile', tokenCheckMiddleware, editProfileController);

//ViewProduct
router.get('/viewProduct', redisUserTokenCheck, viewProductController)

module.exports = router