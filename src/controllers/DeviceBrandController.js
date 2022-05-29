const DeviceBrand = require('../models/DeviceBrand')

module.exports = {
    async index(req, res) {
        try {
            const DeviceBrands = await DeviceBrand.findAll();
            return res.status(200).json(DeviceBrands);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { devicebrand } = req.body;
        if (!devicebrand) {
            return res.status(400).json({ error: "Campo Serviço é obrigatório" });

        }

        try {
            const NewBrand = await DeviceBrand.create({ devicebrand });
            return res.status(201).json(NewBrand);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        const { id } = req.params;

        try {
            const devicebrand = await DeviceBrand.destroy({ where: { id: id } });

            if (devicebrand) {
                return res.status(200).json("Marca deletada");
            } else {
                return res.status(400).json("Não há Marca com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}
