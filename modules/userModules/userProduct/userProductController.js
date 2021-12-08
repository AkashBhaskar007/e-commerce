require('dotenv').config()

const {
    showProductService
} = require('../userProduct/userProductService')


exports.viewProductController = async (req, res) => {
    const product = await showProductService();
    if (product == "")
        return res.send({ message: 'No products to view!' })
    return res.send({
        data: product
    })
}