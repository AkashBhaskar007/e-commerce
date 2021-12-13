require('dotenv').config();
const { createCart } = require('./productService')
const Product = require('../../models/product')
exports.cartController = async (req, res) => {
    let { id } = req.params;
    const userID = req.decoded.id;
    let { productQuantity } = req.body;
    const newCart = await createCart(userID, id, productQuantity);
    if (!newCart)
        return res.send('Cart not added!')
    const cart = await Product.
        findById(req.params.id)
        .populate()
        .exec();
    return res.send({ message: 'Product added to cart!', cart });
}