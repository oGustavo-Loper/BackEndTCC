const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        const clients = await Client.findAll();

        return res.json(clients);
    },

    // retorna todas as ordens de serviço de um cliente
    // async index(req, res) {
    //     // const servicesOrder = await ServiceOrder.findAll();
    //     // return res.json(servicesOrder);
    //     const { client_id } = req.params;

    //     const client = await Client.findByPk(client_id, {
    //         include: { association: 'ServicesOrders' }
    //     });

    //     return res.status(200).json(client);

    // },


    async store(req, res) {
        const { name, number, CPF, email, address } = req.body;

        if (!name || !number) {
            res.status(400).json({ error: "Nome e numero são campos obrigatórios." });
            return
        }

        const NewClient = await Client.create({ name, number, CPF, email, address });

        return res.json(NewClient);
    }
}

