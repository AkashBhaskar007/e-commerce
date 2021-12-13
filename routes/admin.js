require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController, } = require('../modules/adminModules/adminRegLog/adminRegLogController');

const { addProductController, viewProductController, editProductController, deleteProductController } = require('../modules/adminModules/adminProduct/adminProductController');

const { listUserController, blockUserController } = require('../modules/adminModules/adminUser/adminUserController');

const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');

const { redisAdminLoginTokenCheck, redisAdminTokenCheck } = require('../redisconfig/redisconfig');

//RegisterAdmin
router.post('/registerAdmin', registerController);

//LoginAdmin
router.post('/loginAdmin', redisAdminLoginTokenCheck, loginController);

//LogoutAdmin
router.post('/logoutAdmin', redisAdminTokenCheck, logoutController);

//AddProduct
router.post('/addProduct', redisAdminTokenCheck, tokenCheckMiddleware, addProductController);

//EditProduct
router.put('/editProduct/:id', redisAdminTokenCheck, tokenCheckMiddleware, editProductController);

//DeleteProduct
router.delete('/deleteProduct/:id', redisAdminTokenCheck, tokenCheckMiddleware, deleteProductController);

//ListItemAdmin
router.get('/viewProduct', redisAdminTokenCheck, viewProductController);

//ListUsers
router.get('/listUsers', redisAdminTokenCheck, tokenCheckMiddleware, listUserController);

//BlockUsers
router.post('/blockUser/:id', redisAdminTokenCheck, blockUserController)

module.exports = router