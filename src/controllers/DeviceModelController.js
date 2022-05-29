const DeviceModel = require('../models/DeviceModel')

module.exports = {
    async index(req, res) {
        try {
            const DeviceModels = await DeviceModel.findAll({
                include: [{
                    association: 'DeviceBrandModel'
                }]
            });

            return res.status(200).json(DeviceModels);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { DeviceBrand_id, devicemodel } = req.body;
        try {
            if (!devicemodel) {

                return res.status(400).json({ error: "Campo Serviço é obrigatório" });

            }

            const NewDeviceModel = await DeviceModel.create({ DeviceBrand_id, devicemodel });

            return res.status(200).json(NewDeviceModel);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async destroy(req, res) {
        const { id } = req.params;

        try {
            const devicemodel = await DeviceModel.destroy({ where: { id: id } });

            if (devicemodel) {
                return res.status(200).json("Modelo deletado");
            } else {
                return res.status(400).json("Não há modelos com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}
