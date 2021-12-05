const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String, unique: true },
    password: { type: String }
});
module.exports = mongoose.model('Admin', adminSchema);