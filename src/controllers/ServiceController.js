const Service = require('../models/Service')

module.exports = {
    async index(req, res) {
        const services = await Service.findAll();

        return res.json(services);
    },

    async store(req, res) {
        const { service } = req.body;

        if (!service) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        const NewService = await Service.create({ service });

        return res.json(NewService);
    }
}
