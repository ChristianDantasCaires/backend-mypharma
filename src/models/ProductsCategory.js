const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema(
    {
        name: {
            id: { unique: true },
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("productCategory", ProductCategorySchema);