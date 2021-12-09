require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController, } = require('../modules/adminModules/adminRegLog/adminRegLogController');

const { addProductController, viewProductController, editProductController, deleteProductController } = require('../modules/adminModules/adminProduct/adminProductController');

const { listUserController } = require('../modules/adminModules/adminUser/adminUserController');

//const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');

const { redisAdminTokenCheck } = require('../redisconfig/redisconfig');

//RegisterAdmin
router.post('/registerAdmin', registerController);

//LoginAdmin
router.post('/loginAdmin', loginController);

//LogoutAdmin
router.post('/logoutAdmin', redisAdminTokenCheck, logoutController);

//AddProduct
router.post('/addProduct', redisAdminTokenCheck, addProductController);

//EditProduct
router.put('/editProduct/:id', redisAdminTokenCheck, editProductController);

//DeleteProduct
router.delete('/deleteProduct/:id', redisAdminTokenCheck, deleteProductController);

//ListItemAdmin
router.get('/viewProduct', redisAdminTokenCheck, viewProductController);

//ListUsers
router.get('/listUsers', redisAdminTokenCheck, listUserController);

module.exports = router