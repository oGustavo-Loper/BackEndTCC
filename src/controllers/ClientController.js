const Client = require('../models/Client')

module.exports = {
    async index(req, res) {
        try {
            const clients = await Client.findAll();

            return res.status(200).json(clients);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    //retorna todas as ordens de serviço de um cliente
    async indexByOrder(req, res) {
        const { id } = req.params;

        const client = await Client.findByPk(id, {
            include: { association: 'ServicesOrders' }
        });

        return res.status(200).json(client);

    },

    async indexByName(req, res) {
        const { name } = req.params;

        const client = await Client.findAll({
            where: { name: name },
            include: { association: 'ServicesOrders' }
        });

        return res.status(200).json(client);

    },


    async store(req, res) {
        const { name, number, CPF, email, address } = req.body;
        try {
            if (!name || !number) {
                res.status(400).json({ error: "Nome e numero são campos obrigatórios." });
                return
            }

            const NewClient = await Client.create({ name, number, CPF, email, address });

            return res.json(NewClient);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async destroy(req, res) {
        const { id } = req.params;

        try {
            const client = await Client.destroy({ where: { id: id } });

            if (client) {
                return res.status(200).json("Cliente deletado");
            } else {
                return res.status(400).json("Não há Cliente com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}

