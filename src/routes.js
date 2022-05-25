const express = require('express');
const ClientController = require('./controllers/ClientController');
const ServiceController = require('./controllers/ServiceController');
const DeviceBrandController = require('./controllers/DeviceBrandController');
const DeviceModelController = require('./controllers/DeviceModelController');
const ServiceOrderController = require('./controllers/ServiceOrderController');

const routes = express('routes');

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);

routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);

routes.post('/devicebrands', DeviceBrandController.store);
routes.get('/devicebrands', DeviceBrandController.index);

routes.post('/devicemodels', DeviceModelController.store);
routes.get('/devicemodels', DeviceModelController.index);

routes.post('/serviceorder', ServiceOrderController.store);
routes.get('/serviceorder', ServiceOrderController.index);
routes.get('/:client_id/serviceorder', ServiceOrderController.SearchByClient);



module.exports = routes;