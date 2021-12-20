require('dotenv').config();
const Product = require('../../models/product')
const Cart = require('../../models/cart');
const Order = require('../../models/order');

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

    const newOrder = await Order.create({
        userID,
        cartID,
        paymentMethod,
        orderStatus: 'Order placed, delivery date will be updated soon!'
    })
    if (!newOrder)
        return false;
    else return newOrder;
}

exports.viewOrder = async (userID) => {
    const showOrder = await Order.find({ where: Order.userID == userID })
    if (!showOrder)
        return false;
    return showOrder;
}