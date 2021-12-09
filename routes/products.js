const router = require('express').Router();
require('dotenv').config()


const { cartController } = require('../modules/productModules/cartController')
//Add to cart
router.post('/cart', cartController);