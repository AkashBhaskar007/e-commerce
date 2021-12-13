const router = require('express').Router();
require('dotenv').config()

const { redisUserTokenCheck } = require('../redisconfig/redisconfig')
const { tokenCheckMiddleware } = require('../middlewares/tokenCheck');
const { cartController } = require('../modules/productModules/cartController')
//Add to cart
router.post('/cart/:id', redisUserTokenCheck, tokenCheckMiddleware, cartController);


module.exports = router