const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    async store(req, res) {
        // faz a desestruturação do objeto req.body
        const { name, email, password } = req.body;
        // validação para os campos


        const dados = await User.findOne({ where: { email: email } })
        if (dados) {
            res.status(400).json({ erro: "E-mail já Cadastrado" });
            return;
        }

        try {
            const hash = bcrypt.hashSync(password, 10);
            const novo = await User.create({ name, email, password: hash });
            res.status(201).json({ novo });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    async login(req, res) {
        // faz a desestruturação do objeto req.body
        const { email, password } = req.body;

        // validação para os campos
        if (!email || !password) {
            //      res.status(400).json({ erro: "Enviar email, senha do usuário" });
            res.status(400).json({ erro: "Login ou senha incorretos" });
            return;
        }


        // verifica se o e-mail já está cadastrado
        try {

            const dados = await User.findOne({
                where: { email }
            });

            if (!dados) {
                res.status(400).json({ erro: "Login ou senha incorretos" });
                return;
            }

            if (bcrypt.compareSync(password, dados.password)) {

                const token = jwt.sign({
                    usuario_id: dados.id,
                    usuario_name: dados.name
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "8h"
                    }
                )

                res.status(200).json({ name: dados.name, token });
            } else {
                //res.status(400).json({ erro: "Senha Incorreta" });
                res.status(400).json({ erro: "Login ou senha incorretos" });
            }
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },
};