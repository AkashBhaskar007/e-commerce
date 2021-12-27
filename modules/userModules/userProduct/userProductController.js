require('dotenv').config()

const {
    showProductService
} = require('../userProduct/userProductService')


exports.viewProductController = async (req, res) => {
    const { page, size } = req.query;


    const limit = parseInt(size);
    const startIndex = (page - 1) * size;

    const product = await showProductService(startIndex, limit);
    if (!product.length)
        return res.send({ message: 'No products to view!' })
    return res.send({
        data: product
    })
}

exports.orderController = async (req, res) => {

}