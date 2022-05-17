const Brand = require('../models/Brand')

module.exports = {
    async index(req, res) {
        const brands = await Brand.findAll();
        return res.status(200).json(brands);
    },

    async store(req, res) {
        const { brand } = req.body;

        if (!brand) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        try {
            const NewBrand = await Brand.create({ brand });
            return res.status(201).json(NewBrand);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
