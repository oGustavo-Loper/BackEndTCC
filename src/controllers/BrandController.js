const Brand = require('../models/Brand')

module.exports = {
    async index(req, res) {
        const brands = await Brand.findAll();

        return res.json(brands);
    },

    async store(req, res) {
        const { brand } = req.body;

        if (!brand) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        const NewBrand = await Brand.create({ brand });

        return res.json(NewBrand);
    }
}
