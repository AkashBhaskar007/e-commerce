require('dotenv').config()

const {
    showProductService
} = require('../userProduct/userProductService')


exports.viewProductController = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const product = await showProductService(startIndex, endIndex);
    if (product == "")
        return res.send({ message: 'No products to view!' })
    return res.send({
        data: product
    })
}

exports.orderController = async (req, res) => {

}