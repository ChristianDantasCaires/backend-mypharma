const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id: { unique: true },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            id: { unique: true }
        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("User", userSchema);