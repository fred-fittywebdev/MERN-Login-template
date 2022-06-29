const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64,
        },
        isverified: {
            type: Boolean,
            default: false,
        },
        resetCode: "",
    });

const userModel = mongoose.model('users', userSchema);
module.exports = userSchema;