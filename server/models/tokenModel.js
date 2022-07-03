const mongoose = require('mongoose');
const { Schema } = mongoose

const tokenSchema = new Schema(
    {
        userId: {
            type: String,
            trim: true,
            required: true,
        },
        token: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("tokens", tokenSchema);