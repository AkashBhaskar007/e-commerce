const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    // userName: { type: mongoose.Types.ObjectId, ref: 'User' }
    productID: { type: mongoose.Types.ObjectId, ref: 'Product' },
    productName: { type: mongoose.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
}, {
    timestamps: true
});
module.exports = mongoose.model('Cart', cartSchema);