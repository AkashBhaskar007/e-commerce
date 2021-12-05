const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    productID: { type: mongoose.Types.ObjectId, ref: 'Products' },
    userID: { type: mongoose.Types.ObjectId, ref: 'User' },
    address: { type: String },
    orderStatus: { type: String },
    orderDate: { type: Date },
    deliveryDate: { type: Date },
}, {
    timestamps: true
});
module.exports = mongoose.model('Orders', orderSchema);