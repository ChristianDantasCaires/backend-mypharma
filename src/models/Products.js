const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            id: { unique: true },
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        estoque: {
            type: Boolean,
            required: true
        },

        category: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema);