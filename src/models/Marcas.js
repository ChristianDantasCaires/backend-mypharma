const mongoose = require("mongoose");

const MarcasSchema = new mongoose.Schema(
    {
        id: { unique: true },
        name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("marcas", MarcasSchema);