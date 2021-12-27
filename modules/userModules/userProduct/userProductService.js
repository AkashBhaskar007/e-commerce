const Product = require('../../../models/product');


exports.showProductService = async (startIndex, limit) => {
    const product = await Product.find().limit(limit).skip(startIndex)
    if (!product)
        return false;
    return product;
}