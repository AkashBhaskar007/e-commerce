require('dotenv').config()

const {
    addProductService, showProductService, editProductService, deleteProductService, updateOrderService
} = require('../adminProduct/adminProductService')
const { body, validationResult }
    = require('express-validator');
const product = require('../../../models/product');


exports.addProductController = async (req, res) => {
    if (req.decoded.role == 'Admin') {
        let { productName,
            productDescription,
            productCategory,
            productQuantityAvailable,
            productPrice,
            productImage } = req.body;

        const addProduct = await addProductService({
            productName, productDescription, productCategory, productQuantityAvailable, productPrice, productImage
        })
        if (!addProduct)
            return res.send('Something went wrong')
        return res.send(addProduct)

    }

    return res.send('Not authorised to add products!')
}
exports.viewProductController = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const product = await showProductService(startIndex, endIndex);
    if (product == "")
        return res.send({ message: 'No products added!' })
    return res.send({
        data: product
    })
}


exports.editProductController = async (req, res) => {
    if (req.role.user == 'Admin') {
        let { productName,
            productDescription,
            productCategory,
            productQuantityAvailable,
            productPrice,
            productImage } = req.body;
        let { id } = req.params;
        const editProduct = {
            id,
            productName,
            productDescription,
            productCategory,
            productQuantityAvailable,
            productPrice,
            productImage
        }
        const eProduct = await editProductService(editProduct)
        if (!eProduct)
            return res.send('Something went wrong')
        return res.send({
            message: 'Product updated successfully',
            data: editProduct
        });
    }
    return res.send('Not authorised to add products!')
}

exports.deleteProductController = async (req, res) => {
    let { id } = req.params;
    const product = await deleteProductService(id);
    if (!product)
        return res.status(400).json({ message: "Something went wrong!" })
    return res.json({ message: "Product Deleted!" })
}

exports.updateOrderController = async (req, res) => {
    let { id } = req.params;
    let { orderStatus } = req.body;
    const updateOrder = {
        id,
        orderStatus
    }
    const updateOrders = await updateOrderService(updateOrder)
    if (!updateOrders)
        return res.send('Something went wrong')
    return res.send('Order updated')
}



/*let { productName,
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
});*/