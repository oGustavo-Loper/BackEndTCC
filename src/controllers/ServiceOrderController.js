const ServiceOrder = require('../models/ServiceOrder')
const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        const servicesOrder = await ServiceOrder.findAll();

        return res.json(servicesOrder);
    },

    async store(req, res) {
        const { name, number, CPF, email, address } = req.body;
        const { observation, withdrawal, value, client_id,
            service_id, brand_id, modelo_id } = req.body;

        if (!name || !number) {
            res.status(400).json({ error: "Nome e numero são campos obrigatórios." });
            return
        }

        const client = await Client.create({ name, number, CPF, email, address });

        const serviceOrder = await ServiceOrder.create({
            observation, withdrawal, value,
            client_id, service_id, brand_id, modelo_id
        });

        return res.json(serviceOrder);


        // Puxar dados do cliente, marca, modelo, e ordem de serviço por aqui.
    }
}

