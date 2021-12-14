require('dotenv').config();
const { createCart, deleteCartService } = require('./productService')
const Cart = require('../../models/cart')
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