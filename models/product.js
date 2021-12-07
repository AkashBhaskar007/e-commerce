const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    productCategory: { type: mongoose.Types.ObjectId, ref: 'Category', unique: true, required: true },
    productQuantityAvailable: { type: Number, required: true },
    productPrice: { type: Number, required: true },
    productImage: { type: String, required: true },
}, {
    timestamps: true
});
module.exports = mongoose.model('Products', productSchema);