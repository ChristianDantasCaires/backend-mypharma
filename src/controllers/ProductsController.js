const Product = require("../models/Products");
const User = require("../models/User");

class ProductController {
    async create(req, res) {
        try {
            const { user_id } = req.params;
            const { name, description, price, estoque, category, marca } = req.body;
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            const newProduct = await Product.create(
                { name, description, price, estoque, category, marca, userId: user_id }
            );

            return res.status(200).json(newProduct);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        try {
            const { user_id } = req.params;
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            const products = await Product.find({ userId: user_id });
            return res.json(products);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { user_id } = req.params;
            const { name, description, price, estoque, category, marca } = req.body;
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            const product = await Product.findOne({ userId: user_id });

            if (!product) {
                return res.status(404).json({ error: "Product does not exists." });
            }

            await product.updateOne({ name, description, price, estoque, category, marca });

            return res.status(200).json({ success: `Product has been changed` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req, res) {
        try {
            const { user_id } = req.params;
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({ error: "User does not exists." });
            }

            const product = await Product.findOne({ userId: user_id });

            if (!product) {
                return res.status(404).json({ error: "Product does not exists." });
            }

            await product.deleteOne();
            return res.status(200).json({ success: `Product has been deleted` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new ProductController();