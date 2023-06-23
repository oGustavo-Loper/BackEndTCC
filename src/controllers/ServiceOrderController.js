const ServiceOrder = require('../models/ServiceOrder')
const Client = require('../models/Client')
const Payment = require('../models/Payment')
const PaymentMethod = require('../models/PaymentMethod')
const Machine = require('../models/Machine')
const ServiceOrder_PaymentMethod = require('../models/ServiceOrder_PaymentMethod')
const nodemailer = require('nodemailer');

module.exports = {
    async index(req, res) {
        try {
            const servicesOrder = await ServiceOrder.findAll({
                where: { open: true },
                include: [{
                    association: 'client'
                },
                {
                    association: 'DeviceModel',
                    include: [{
                        association: 'DeviceBrand'
                    }]
                },
                {
                    association: 'service'
                }]
            });


            return res.status(200).json(servicesOrder);


        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async SearchByClient(req, res) {
        const { id } = req.params;

        try {
            const order = await ServiceOrder.findByPk(id, {

                include: [{
                    association: 'client'
                },
                {
                    association: 'DeviceModel',
                    include: [{
                        association: 'DeviceBrand'
                    }]
                },
                {
                    association: 'service'
                }]
            });

            if (order) {
                return res.status(200).json(order);
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async SearchByClientClosed(req, res) {
        const { id } = req.params;

        try {
            const order = await ServiceOrder.findByPk(id, {
                where: { open: false },
                include: [{
                    association: 'client'
                },
                {
                    association: 'DeviceModel',
                    include: [{
                        association: 'DeviceBrand'
                    }]
                },
                {
                    association: 'service'
                }]
            });

            if (order) {
                return res.status(200).json(order);
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { name, number, CPF, email, address,
            observation, withdrawal, value, negativeValue, service_id,
            DeviceModel_id } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Nome é campo obrigatório." });
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
                    service_id, DeviceModel_id
                });

                return res.status(201).json(serviceOrder);
            } else {
                const client = await Client.create({ name, number, CPF, email, address });

                const client_id = client.id

                const serviceOrder = await ServiceOrder.create({
                    observation, withdrawal, value, negativeValue, client_id,
                    service_id, DeviceModel_id
                });

                return res.status(201).json(serviceOrder);
            }
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        let { name, number, CPF, email, address,
            observation, withdrawal, value, negativeValue, service_id,
            DeviceModel_id } = req.body;

        const data = await ServiceOrder.findOne({ where: { id: id } })

        if (!data) {
            res.status(400).json({ erro: "Ordem inexistente" });
            return;
        }

        if (!DeviceModel_id) {
            DeviceModel_id = data.DeviceModel_id;
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
                const updateOrder = await data.update({
                    observation, withdrawal, value, negativeValue, client_id,
                    service_id, DeviceModel_id
                });

                return res.status(201).json(updateOrder);
            } else {
                const client = await Client.create({ name, number, CPF, email, address });

                const client_id = client.id

                const updateOrder = await data.update({
                    observation, withdrawal, value, negativeValue, client_id,
                    service_id, DeviceModel_id
                });

                return res.status(201).json(updateOrder);
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
                return res.status(200).json("Não há Ordens com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async finishOS(req, res) {
        const { ServiceOrder_id } = req.params;
        const { PaymentMethod_id, machine_id } = req.body;
        const { installments } = req.body;

        const data = await ServiceOrder.findOne({ where: { id: ServiceOrder_id } })

        try {
            const payment = await Payment.create({ PaymentMethod_id, machine_id })
            console.log(payment.id)

            const payment_id = payment.id
            const PivotTable = await ServiceOrder_PaymentMethod.create({
                installments,
                ServiceOrder_id,
                payment_id
            })
            const updateOrder = await data.update({ open: false });
            return res.status(200).json(PivotTable);

        } catch (error) {
            return res.status(400).json({ msg: error.message });

        }
    },

    async getOrdersEnded(req, res) {
        try {
            const servicesOrderEnded = await ServiceOrder_PaymentMethod.findAll({
                include: [
                    {
                        association: 'pagamento',
                    },
                    {
                        association: 'ordemServico',
                        include: [
                            {
                                association: 'client',
                            },
                            {
                                association: 'DeviceModel',
                                include: [
                                    {
                                        association: 'DeviceBrand',
                                    },
                                ],
                            },
                            {
                                association: 'service',
                            },
                        ],
                    },
                ],
            });

            if (servicesOrderEnded.length > 0) {
                return res.status(200).json(servicesOrderEnded);
            } else {
                return res.status(404).json({ error: 'No ended orders found' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // async getOrdersEnded(req, res) {
    //     try {
    //         const servicesOrderEnded = await ServiceOrder_PaymentMethod.findAll({
    //             include: [{
    //                 association: 'pagamento'
    //             },
    //             {
    //                 association: 'ordemServico',
    //                 include: [{
    //                     association: 'client'
    //                 },
    //                 {
    //                     association: 'DeviceModel',
    //                     include: [{
    //                         association: 'DeviceBrand'
    //                     }]
    //                 },
    //                 {
    //                     association: 'service'
    //                 }]
    //             }]
    //         });
    //         if (servicesOrderEnded) {
    //             return res.status(200).json(servicesOrderEnded);
    //         }

    //     } catch (error) {
    //         return res.status(400).json({ msg: error.message });
    //     }
    // },

    async getPaymentMethods(req, res) {
        try {
            const paymentMethods = await PaymentMethod.findAll({});

            if (paymentMethods.length >= 1) {
                return res.status(200).json(paymentMethods);
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async getMachines(req, res) {
        try {
            const Machines = await Machine.findAll({});

            if (Machines.length >= 1) {
                return res.status(200).json(Machines);
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async sendEmail(req, res) {
        const { email, ordem } = req.body
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'barbozagarcia@outlook.com',
                    pass: '09041997!'
                }
            })

            transporter.sendMail({
                from: 'Loja Troca vidro <barbozagarcia@outlook.com>',
                to: email,
                subject: 'Ordem de serviço',
                html: ordem
            })
            return res.status(200).json();
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

}

