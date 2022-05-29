const Service = require('../models/Service')

module.exports = {
    async index(req, res) {
        try {
            const services = await Service.findAll();

            return res.status(200).json(services);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { service } = req.body;

        if (!service) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }
        try {
            const NewService = await Service.create({ service });

            return res.status(200).json(NewService);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    async destroy(req, res) {
        const { id } = req.params;

        try {
            const service = await Service.destroy({ where: { id: id } });

            if (service) {
                return res.status(200).json("Serviço deletado");
            } else {
                return res.status(400).json("Não há Serviço com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}
