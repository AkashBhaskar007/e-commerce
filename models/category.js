const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    category: { Type: String, unique: true },
});
module.exports = mongoose.model('Category', categorySchema);