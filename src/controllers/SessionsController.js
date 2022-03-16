const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { checkPassword } = require("../services/auth");
const authConfig = require("../config/auth");

class SessionsController {
    async create(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email, password });

            if (!user) {
                return res.status(401).json({ error: "User / Password invalid." });
            }

            if (!checkPassword(user, password)) {
                return res.status(401).json({ error: "User / Password invalid." });
            }

            const { id } = user;

            return res.json({
                user: { id, email },
                token: jwt.sign(
                    { id },
                    authConfig.secret,
                    {
                        expiresIn: authConfig.expiresIn
                    }
                )
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }

    }
}

module.exports = new SessionsController();