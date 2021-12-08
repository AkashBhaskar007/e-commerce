require('dotenv').config()

const {
    addProductService, showProductService
} = require('../adminProduct/adminProductService')



exports.addProductController = async (req, res) => {
    let { productName,
        productDescription,
        productCategory,
        productQuantityAvailable,
        productPrice,
        productImage } = req.body;
    if (!productName || !productDescription || !productCategory || !productQuantityAvailable || !productPrice || !productImage)
        return res.status(400).json({ message: "All fields have not been entered!" })
    const newProduct = await addProductService({ productName, productDescription, productCategory, productQuantityAvailable, productPrice, productImage })
    if (!newProduct)
        return res.json({ message: 'Product not added!' })
    return res.json({
        message: 'Product added!',
        data: newProduct
    });
}
exports.viewProductController = async (req, res) => {
    const product = await showProductService();
    if (product == "")
        return res.send({ message: 'No products added!' })
    return res.send({
        data: product
    })
}