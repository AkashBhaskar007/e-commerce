const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    cartID: { type: mongoose.Types.ObjectId, ref: 'Cart' },
    userID: { type: mongoose.Types.ObjectId, ref: 'User' },
    paymentMethod: { type: String },
    orderStatus: { type: String },
    orderDate: { type: Date }
});
module.exports = mongoose.model('Orders', orderSchema);