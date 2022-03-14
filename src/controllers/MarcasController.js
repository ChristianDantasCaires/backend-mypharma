const Marcas = require("../models/Marcas");

class MarcasController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const marca = await Marcas.findOne({ name });

            if (marca) {
                return res.status(422).json({ error: `Marca ${marca.name} already exists.` });
            }

            await Marcas.create({ name });
            return res.status(200).json({});

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readAll(req, res) {
        try {
            const marcas = await Marcas.find();
            return res.json({ marcas });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;
            const marca = await Marcas.findById(id);

            if (!marca) {
                return res.status(404).json({ error: "Marca does not exists." });
            }

            return res.json(marca);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { name } = req.body;
            const { id } = req.params;
            const marca = await Marcas.findById(id);

            if (!name) {
                return res.status(404).json({ error: "You should put a name." });
            }

            if (!marca) {
                return res.status(404).json({ error: "Marca does not exists." });
            }

            await marca.updateOne({ name });
            return res.status(200).json({ success: `Marca has been changed` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const marca = await Marcas.findById(id);

            if (!marca) {
                return res.status(404).json({ error: "Marca does not exists." });
            }

            await marca.deleteOne();
            return res.status(200).json({ success: `Marca has been deleted` });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new MarcasController();