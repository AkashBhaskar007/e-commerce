const Product = require('../../../models/product');


exports.showProductService = async () => {
    const product = await Product.find()
    if (!product)
        return false;
    return product;
}//pagination