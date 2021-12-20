require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController, } = require('../modules/adminModules/adminRegLog/adminRegLogController');

const { addProductController, viewProductController, editProductController, deleteProductController, updateOrderController } = require('../modules/adminModules/adminProduct/adminProductController');

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
router.get('/viewProduct', redisAdminTokenCheck, tokenCheckMiddleware, viewProductController);

//ListUsers
router.get('/listUsers', redisAdminTokenCheck, tokenCheckMiddleware, listUserController);

//UpdateOrder
router.put('/updateOrder/:id', redisAdminTokenCheck, tokenCheckMiddleware, updateOrderController);
module.exports = router