require('dotenv').config();
const Product = require('../../models/product')
const Cart = require('../../models/cart');
const order = require('../../models/order');

exports.createCart = async (userID, productID, productQuantity) => {
    const newCart = await Cart.create({
        userID,
        productID,
        productQuantity,

    });

    if (!newCart)
        return false;
    return newCart;
}
exports.deleteCartService = async (id) => {
    const delProduct = await Cart.deleteOne({ _id: id })
    if (delProduct.deletedCount < 1)
        return false;
    return true;
}
exports.createOrder = async (userID, cartID, paymentMethod, orderStatus) => {

    const newOrder = await order.create({
        userID,
        cartID,
        paymentMethod,
        orderStatus: 'Order placed, delivery date will be updated soon!'
    })
    if (!newOrder)
        return false;
    else return newOrder;
}