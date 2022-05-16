const Modelos = require('../models/Modelo')

module.exports = {
    async index(req, res) {
        const modelos = await Modelos.findAll();

        return res.json(modelos);
    },

    async store(req, res) {
        const { modelo } = req.body;

        if (!modelo) {
            res.status(400).json({ error: "Campo Serviço é obrigatório" });
            return
        }

        const NovoModelo = await Modelos.create({ modelo });

        return res.json(NovoModelo);
    }
}
