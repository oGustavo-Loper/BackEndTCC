const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../models/Client')
const ServiceOrder = require('../models/ServiceOrder')
const Service = require('../models/Service')
const DeviceModel = require('../models/DeviceModel')
const DeviceBrand = require('../models/DeviceBrand');
const User = require('../models/User');


const connection = new Sequelize(dbConfig);

Client.init(connection);
Service.init(connection);
DeviceModel.init(connection);
DeviceBrand.init(connection);
ServiceOrder.init(connection);
User.init(connection);


Client.associate(connection.models);
Service.associate(connection.models);
DeviceModel.associate(connection.models);
ServiceOrder.associate(connection.models);

module.exports = connection;