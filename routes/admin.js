require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController,
    viewProductController,
    listUserController
} = require('../modules/adminModules/adminController');
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
const { redisTokenCheck } = require('../redisconfig/redisconfig');
//RegisterAdmin
router.post('/registerAdmin', registerController);
//LoginAdmin
router.post('/loginAdmin', loginController);
//LogoutAdmin
router.post('/logoutAdmin', tokenCheckMiddleware, logoutController);
//ListItemAdmin
router.get('/viewProduct', viewProductController);
//ListUsers
router.get('/listUsers',tokenCheckMiddleware, listUserController);
module.exports = router