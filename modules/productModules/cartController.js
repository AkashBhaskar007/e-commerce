require('dotenv').config();
const { createCart, deleteCartService, createOrder, viewOrder } = require('./productService')
const Cart = require('../../models/cart')
const Product = require('../../models/product');
const order = require('../../models/order');


exports.cartController = async (req, res) => {
    let { id } = req.params;
    const userID = req.decoded.id;
    let { productQuantity } = req.body;
    const newCart = await createCart(userID, id, productQuantity);
    if (!newCart)
        return res.send('Cart not added!')
    const cart = await Cart.
        findById(newCart._id)
        .populate('userID productID', 'productName productDescription');
    await Product.findById({ productQuantity }, {
        productQuantity: Product.productQuantity - Cart.productQuantity
    });

    console.log(Product.productQuantity);

    return res.send({ message: 'Product added to cart!', cart });
}

exports.deleteCartController = async (req, res) => {
    let { id } = req.params;
    const cart = await deleteCartService(id);
    console.log(cart);
    if (!cart)
        return res.status(400).json({ message: "Something went wrong!" })
    return res.json({ message: "Items removed from cart!" })
}

exports.checkoutController = async (req, res) => {
    let { id } = req.params;
    const userID = req.decoded.id;
    let { paymentMethod } = req.body;
    const findCart = await Cart.findById(id);
    if (!findCart)
        return res.send('Cart empty')
    const newOrder = await createOrder(userID, id, paymentMethod);
    if (!newOrder)
        return res.send('Order not placed! Please try later');
    await Cart.findByIdAndDelete(id);
    return res.send({ message: 'Order placed successfully', newOrder });

}

exports.viewOrderController = async (req, res) => {
    const userID = req.decoded.id;
    const viewOrders = await viewOrder(userID);
    if (!viewOrders)
        return res.send('No orders placed!')
    return res.send(viewOrders)

}