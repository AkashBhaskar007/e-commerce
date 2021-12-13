require('dotenv').config();
const Product = require('../../models/product')
const Cart = require('../../models/cart')

exports.createCart = async (userID, productID, productQuantity) => {
    const newCart = await Cart.create({
        userID,
        productID,
        productQuantity

    });
    if (!newCart)
        return false;
    return newCart;
}