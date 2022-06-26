const ServiceOrder = require('../models/ServiceOrder')
const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        try {
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

            if (servicesOrder.length >= 1) {
                return res.status(200).json(servicesOrder);
            } else {
                return res.status(400).json("Não há Ordens de Serviço");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async SearchByClient(req, res) {
        const { client_id } = req.params;

        try {
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

            if (client) {
                return res.status(200).json(client);
            } else {
                return res.status(400).json("Não há Ordens de Serviço");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { name, number, CPF, email, address,
            observation, withdrawal, value, negativeValue, service_id,
            DeviceBrand_id, DeviceModel_id } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Nome é campos obrigatórios." });

        }

        try {
            const clients = await Client.findOne({
                where: {
                    name: name, number: number, CPF: CPF,
                    email: email, address: address
                }
            });

            if (clients) {
                const client_id = clients.id
                const serviceOrder = await ServiceOrder.create({
                    observation, withdrawal, value, negativeValue, client_id,
                    service_id, DeviceBrand_id, DeviceModel_id
                });

                return res.status(201).json(serviceOrder);
            } else {
                const client = await Client.create({ name, number, CPF, email, address });

                const client_id = client.id

                const serviceOrder = await ServiceOrder.create({
                    observation, withdrawal, value, negativeValue, client_id,
                    service_id, DeviceBrand_id, DeviceModel_id
                });

                return res.status(201).json(serviceOrder);
            }
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async destroy(req, res) {
        const { id } = req.params;

        try {
            const serviceorder = await ServiceOrder.destroy({ where: { id: id } });

            if (serviceorder) {
                return res.status(200).json("Ordem de Serviço deletado");
            } else {
                return res.status(400).json("Não há Ordens com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}

