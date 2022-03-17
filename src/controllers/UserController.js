const User = require("../models/User");
const { createPasswordHash } = require("../services/auth");

class UserController {
    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                return res.status(422).json({ message: `User ${email} already exists.` });
            }

            const securityPass = await createPasswordHash(password);

            const newUser = await User.create({ name, email, password: securityPass });

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

    async readOne(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            return res.json(user);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            const encryptedPassword = await createPasswordHash(password);

            await user.updateOne({ name, email, password: encryptedPassword });
            return res.status(200).json({ success: `User has been changed` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            await user.deleteOne();
            return res.status(200).json({ success: `User has been deleted` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new UserController();