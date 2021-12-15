require('dotenv').config();
const Product = require('../../models/product')
const Cart = require('../../models/cart')

exports.createCart = async (userID, productID, productQuantity) => {
    const quantity = await Product.findOne(Product.productQuantity);
    console.log(quantity);
    const newCart = await Cart.create({
        userID,
        productID,
        productQuantity

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