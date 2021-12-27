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
const { registerValidation } = require('../validation/userValidator');
const { validate } = require('../validation/validator')


//RegisterUser
router.post('/registerUser', validate(registerValidation), registerController);

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