const DeviceBrand = require('../models/DeviceBrand')

module.exports = {
    async index(req, res) {
        const DeviceBrands = await DeviceBrand.findAll();
        return res.status(200).json(DeviceBrands);
    },

    async store(req, res) {
        const { devicebrand } = req.body;

        if (!devicebrand) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        try {
            const NewBrand = await DeviceBrand.create({ devicebrand });
            return res.status(201).json(NewBrand);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
