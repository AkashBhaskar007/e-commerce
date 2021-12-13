const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userID: { type: mongoose.Types.ObjectId, ref: 'User' },
    productID: { type: mongoose.Types.ObjectId, ref: 'Product' },
    productQuantity: { type: Number }

}, {
    timestamps: true
});
module.exports = mongoose.model('Cart', cartSchema);