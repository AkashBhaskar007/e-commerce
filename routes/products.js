const router = require('express').Router();
require('dotenv').config()

const { redisUserTokenCheck } = require('../redisconfig/redisconfig')
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
const { cartController, deleteCartController } = require('../modules/productModules/cartController')

//Add to cart
router.post('/cart/:id', redisUserTokenCheck, tokenCheckMiddleware, cartController);

//Delete cart
router.delete('/deleteCart/:id', redisUserTokenCheck, deleteCartController);


module.exports = router