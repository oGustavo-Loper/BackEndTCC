const ServiceOrder = require('../models/ServiceOrder')
const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        const servicesOrder = await ServiceOrder.findAll({
            include: [{
                association: 'client'
            },
            {
                association: 'DeviceBrand'
            },
            {
                association: 'DeviceModel'
            },
            {
                association: 'service'
            }]
        });

        return res.json(servicesOrder);
    },

    async SearchByClient(req, res) {
        const { client_id } = req.params;

        const client = await ServiceOrder.findByPk(client_id, {
            include: [{
                association: 'client'
            },
            {
                association: 'DeviceBrand'
            },
            {
                association: 'DeviceModel'
            },
            {
                association: 'service'
            }]
        });

        return res.status(200).json(client);
    },

    async store(req, res) {
        const { name, number, CPF, email, address,
            observation, withdrawal, value, service_id,
            DeviceBrand_id, DeviceModel_id } = req.body;

        if (!name || !number) {
            res.status(400).json({ error: "Nome e numero são campos obrigatórios." });
            return
        }

        const client = await Client.create({ name, number, CPF, email, address });

        const client_id = client.id

        const serviceOrder = await ServiceOrder.create({
            observation, withdrawal, value, client_id, service_id, DeviceBrand_id, DeviceModel_id

        });

        return res.json(serviceOrder);
    }
}

