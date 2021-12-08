const Product = require('../../../models/product');

exports.addProductService = async (params) => {
    let { productName,
        productDescription,
        productCategory,
        productQuantityAvailable,
        productPrice,
        productImage } = params;
    const newProduct = Product.create({
        productName,
        productDescription,
        productCategory,
        productQuantityAvailable,
        productPrice,
        productImage
    });
    if (!newProduct)
        return false;
    return newProduct;
}
exports.showProductService = async () => {
    const product = await Product.find()
    if (!product)
        return false;
    return product;
}