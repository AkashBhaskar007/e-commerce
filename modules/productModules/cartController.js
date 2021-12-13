require('dotenv').config();

const { createCart } = require('./productService')

exports.cartController = async (req, res) => {
    const cart = req.user.role;
    const newCart = await createCart(roles);
    if (!newCart)
        return res.send('Cart not added!')
    return res.send('Product added to cart!');
}