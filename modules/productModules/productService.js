require('dotenv').config();

const Cart = require('../../models/cart')

exports.createCart = async (role) => {
    const newCart = await Cart.create({
        role
    });
    if (!newCart)
        return false;
    return newCart;
}