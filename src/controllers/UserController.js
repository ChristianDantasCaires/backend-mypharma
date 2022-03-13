const User = require("../models/User");

class UserController {
    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                return res.status(422).json({ message: `User ${user} already exists.` });
            }

            const newUser = await User.create({ name, email, password });

            return res.status(200).json(newUser);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        return res.send("oi")
    }

    async readOne(req, res) {
        return res.send("oi")
    }

    async update(req, res) {
        return res.send("oi")
    }

    async delete(req, res) {
        return res.send("oi")
    }
}

module.exports = new UserController();