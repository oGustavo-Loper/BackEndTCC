const DeviceBrand = require('../models/DeviceBrand')
const DeviceModel = require('../models/DeviceModel')

module.exports = {
    async index(req, res) {
        try {
            const DeviceBrands = await DeviceBrand.findAll({
                relations: {
                    DeviceModel: true
                }
            });
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

    // async indexByOrder(req, res) {
    //     const { id } = req.params;

    //     const model = await DeviceBrand.findByPk(id);

    //     return res.status(200).json(model);

    // },
    // async indexByOrder(req, res) {
    //     const { id } = req.params;
    //     console.log("backend")
    //     if (!id) {
    //         return res.status(400).json({ error: error.message });
    //     }
    //     const model = await DeviceModel.findAll({ where: { DeviceBrand_id: id } });

    //     return res.status(200).json(model);

    // },
    async indexByOrder(req, res) {
        try {
            const { id } = req.params;
            console.log("backend");

            if (!id) {
                return res.status(400).json({ error: 'ID is required' });
            }

            const models = await DeviceModel.findAll({ where: { DeviceBrand_id: id } });

            return res.status(200).json(models);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
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
