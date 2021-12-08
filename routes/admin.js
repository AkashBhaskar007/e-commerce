require('dotenv').config()

const router = require('express').Router();

const {
    registerController,
    loginController,
    logoutController, } = require('../modules/adminModules/adminRegLog/adminRegLogController');

const { addProductController, viewProductController, editProductController, deleteProductController } = require('../modules/adminModules/adminProduct/adminProductController');

const { listUserController } = require('../modules/adminModules/adminUser/adminUserController');

const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');

const { redisTokenCheck } = require('../redisconfig/redisconfig');

//RegisterAdmin
router.post('/registerAdmin', registerController);

//LoginAdmin
router.post('/loginAdmin', loginController);

//LogoutAdmin
router.post('/logoutAdmin', tokenCheckMiddleware, logoutController);

//AddProduct
router.post('/addProduct', tokenCheckMiddleware, addProductController);

//EditProduct
router.put('/editProduct/:id', tokenCheckMiddleware, editProductController);

//DeleteProduct
router.delete('/deleteProduct/:id', tokenCheckMiddleware, deleteProductController);

//ListItemAdmin
router.get('/viewProduct', tokenCheckMiddleware, viewProductController);

//ListUsers
router.get('/listUsers', tokenCheckMiddleware, listUserController);

module.exports = router