const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../models/Client')
const ServiceOrder = require('../models/ServiceOrder')
const Service = require('../models/Service')
const Modelo = require('../models/Modelo')
const Brand = require('../models/Brand')

const connection = new Sequelize(dbConfig);

Client.init(connection);
Service.init(connection);
Modelo.init(connection);
Brand.init(connection);
ServiceOrder.init(connection);

Client.associate(connection.models);
Service.associate(connection.models);
Modelo.associate(connection.models);
Brand.associate(connection.models);
ServiceOrder.associate(connection.models);


module.exports = connection;