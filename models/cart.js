const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userID: { type: mongoose.Types.ObjectId, ref: 'Users' },
    productID: { type: mongoose.Types.ObjectId, ref: 'Products' },
    productQuantity: { type: Number }

}, {
    timestamps: true
});
module.exports = mongoose.model('Cart', cartSchema);