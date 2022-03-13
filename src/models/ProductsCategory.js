const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema(
    {
        id: { unique: true },
        name: {
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