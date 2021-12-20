require('dotenv').config();
const { createCart, deleteCartService, createOrder } = require('./productService')
const Cart = require('../../models/cart')
const Product = require('../../models/product')


exports.cartController = async (req, res) => {
    let newQuantity;
    let { id } = req.params;
    const userID = req.decoded.id;
    let { productQuantity } = req.body;
    const newCart = await createCart(userID, id, productQuantity);
    if (!newCart)
        return res.send('Cart not added!')
    const cart = await Cart.
        findById(newCart._id)
        .populate('userID productID', 'productName productDescription');
    newQuantity = Product.productQuantity - Cart.productQuantity;
    await Product.findOneAndUpdate({ id }, {
        productQuantity: newQuantity
    });

    console.log(Product.productPrice);

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
    const newOrder = await createOrder(userID, id, paymentMethod);
    if (!newOrder)
        return res.send('Order not placed! Please try later');
    return res.send({message:'Order placed successfully', newOrder});

}