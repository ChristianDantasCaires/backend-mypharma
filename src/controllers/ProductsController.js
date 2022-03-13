const Product = require("../models/Products");

class ProductController {
    async create(req, res) {
        try {
            const { id, name, description, price, estoque, category, marca } = req.body;
            const product = await Product.findById(id);

            if (product) {
                return res.status(422).json({ error: `Product ${product} already exists.` });
            }

            const newProduct = await Product.create(
                { name, description, price, estoque, category, marca }
            );

            return res.status(200).json(newProduct);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);

            if (!product) {
                return res.status(404).json({ error: "Product does not exists." });
            }

            return res.json(product);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { name, description, price, estoque, category, marca } = req.body;
            const { id } = req.params;
            const product = await Product.findById(id);

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
            const { id } = req.params;
            const product = await Product.findById(id);

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