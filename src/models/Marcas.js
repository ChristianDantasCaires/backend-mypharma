const mongoose = require("mongoose");

const MarcasSchema = new mongoose.Schema(
    {
        name: {
            id: { unique: true },
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("marcas", MarcasSchema);