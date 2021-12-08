require('dotenv').config()

const {
    showProductService
} = require('../adminProduct/adminProductService')


exports.viewProductController = async (req, res) => {
    const product = await showProductService();
    if (product == "")
        return res.send({ message: 'No products added!' })
    return res.send({
        data: product
    })
}
