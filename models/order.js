const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    productID: { type: mongoose.Types.ObjectId, ref: 'Products' },
    userID: { type: mongoose.Types.ObjectId, ref: 'User' },
    paymentMethod: { type: String },
    orderStatus: { type: String },
    orderDate: { type: timestamps },
}, {
    timestamps: true
});
module.exports = mongoose.model('Orders', orderSchema);