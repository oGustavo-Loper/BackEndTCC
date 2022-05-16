const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        const clients = await Client.findAll();

        return res.json(clients);
    },

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

