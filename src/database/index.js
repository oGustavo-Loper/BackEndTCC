const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../models/Client')
const ServiceOrder = require('../models/ServiceOrder')
const Service = require('../models/Service')
const DeviceModel = require('../models/DeviceModel')
const DeviceBrand = require('../models/DeviceBrand');
const User = require('../models/User');
const Machine = require('../models/Machine');
const PaymentMethod = require('../models/PaymentMethod');
const Payment = require('../models/Payment');
const ServiceOrder_PaymentMethod = require('../models/ServiceOrder_PaymentMethod')


const connection = new Sequelize(dbConfig);

Client.init(connection);
Service.init(connection);
DeviceModel.init(connection);
DeviceBrand.init(connection);
ServiceOrder_PaymentMethod.init(connection);
ServiceOrder.init(connection);
User.init(connection);
PaymentMethod.init(connection);
Machine.init(connection);
Payment.init(connection);


Client.associate(connection.models);
Service.associate(connection.models);
DeviceModel.associate(connection.models);
ServiceOrder_PaymentMethod.associate(connection.models);
ServiceOrder.associate(connection.models);
PaymentMethod.associate(connection.models);
Machine.associate(connection.models);
Payment.associate(connection.models);

module.exports = connection;