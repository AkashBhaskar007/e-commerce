const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    productID: { type: mongoose.Types.ObjectId, ref: 'Product' },
    productName: { type: mongoose.Types.productName, ref: 'Product' },
    quantity: { type: Number },
}, {
    timestamps: true
});
module.exports = mongoose.model('Cart', cartSchema);