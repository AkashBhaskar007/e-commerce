const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, require: true },

}, {
    timestamps: true
});
module.exports = mongoose.model('Users', userSchema);