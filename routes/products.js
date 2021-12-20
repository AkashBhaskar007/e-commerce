const router = require('express').Router();
require('dotenv').config()

const { redisUserTokenCheck } = require('../redisconfig/redisconfig')
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
const { cartController, deleteCartController, checkoutController, viewOrderController } = require('../modules/productModules/cartController')

//Add to cart
router.post('/cart/:id', redisUserTokenCheck, tokenCheckMiddleware, cartController);

//Delete cart
router.delete('/deleteCart/:id', redisUserTokenCheck, deleteCartController);

//Checkout
router.post('/checkout/:id', redisUserTokenCheck, tokenCheckMiddleware, checkoutController);

//Track and view Order
router.get('/viewOrder', redisUserTokenCheck, tokenCheckMiddleware, viewOrderController);

module.exports = router