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
    return product;//pagination
}
exports.editProductService = async (editProduct) => {
    const editProducts = await Product.updateOne({ _id: editProduct.id }, {
        productName: editProduct.productName,
        productDescription: editProduct.productDescription,
        productCategory: editProduct.productCategory,
        productQuantityAvailable: editProduct.productQuantityAvailable,
        productPrice: editProduct.productPrice,
        productImage: editProduct.productImage
    })
    if (editProducts.modifiedCount < 1)
        return false;
    return true;
}
exports.deleteProductService = async (id) => {
    const delProduct = await Product.deleteOne({ _id: id })
    if (delProduct.deletedCount < 1)
        return false;
    return true;
}