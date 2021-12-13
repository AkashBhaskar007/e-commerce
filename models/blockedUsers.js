const mongoose = require('mongoose');
const blockedUserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, require: true },
    role: { type: String }

}, {
    timestamps: true
});
module.exports = mongoose.model('blockedUsers', blockedUserSchema);