const User = require("../models/User");

class UserController {
    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                return res.status(422).json({ message: `User ${email} already exists.` });
            }

            const newUser = await User.create({ name, email, password });

            return res.status(200).json(newUser);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        try {
            const users = await User.find();
            return res.json(users);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new UserController();