const ProductCategory = require("../models/ProductsCategory");

class ProductsCategoryController {
    async create(req, res) {
        try {
            const { name, description } = req.body;
            const category = await ProductCategory.findOne({ name });

            if (!name || !description) {
                return res.status(422).json({ error: `You should put a name and description.` });
            }

            if (category) {
                return res.status(422).json({ error: `This category already exists.` });
            }

            await ProductCategory.create({ name, description });
            return res.status(200).json({});

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        try {
            const category = await ProductCategory.find();
            return res.json({ category });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;
            const category = await ProductCategory.findById(id);

            if (!category) {
                return res.status(404).json({ error: "Category does not exists." });
            }

            return res.json(category);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { name, description } = req.body;
            const { id } = req.params;
            const category = await ProductCategory.findById(id);

            if (!name || !description) {
                return res.status(404).json({ error: "You should put a category and description." });
            }

            if (!category) {
                return res.status(404).json({ error: "Category does not exists." });
            }

            await category.updateOne({ name, description });
            return res.status(200).json({ success: `Category has been changed` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const category = await ProductCategory.findById(id);

            if (!category) {
                return res.status(404).json({ error: "Category does not exists." });
            }

            await category.deleteOne();
            return res.status(200).json({ success: `Category has been deleted` });


        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }

    }
}

module.exports = new ProductsCategoryController();