const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        id: { unique: true },
        name: {
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
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("product", ProductSchema);