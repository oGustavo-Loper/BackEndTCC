const DeviceModel = require('../models/DeviceModel')

module.exports = {
    async index(req, res) {
        const DeviceModels = await DeviceModel.findAll({
            include: [{
                association: 'DeviceBrandModel'
            }]
        });

        return res.json(DeviceModels);
    },

    async store(req, res) {
        const { DeviceBrand_id, devicemodel } = req.body;

        if (!devicemodel) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        const NewDeviceModel = await DeviceModel.create({ DeviceBrand_id, devicemodel });

        return res.json(NewDeviceModel);
    }
}
