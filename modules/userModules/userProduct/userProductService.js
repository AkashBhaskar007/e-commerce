const Product = require('../../../models/product');


exports.showProductService = async (startIndex, endIndex) => {
    const product = await Product.find()
    if (product == "")
        return false;
    const resultProduct = product.slice(startIndex, endIndex)
    return resultProduct;
}