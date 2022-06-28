const express = require('express');
const ClientController = require('./controllers/ClientController');
const ServiceController = require('./controllers/ServiceController');
const DeviceBrandController = require('./controllers/DeviceBrandController');
const DeviceModelController = require('./controllers/DeviceModelController');
const ServiceOrderController = require('./controllers/ServiceOrderController');

const routes = express('routes');

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/:id/clients', ClientController.indexByOrder);
routes.delete('/:id/clients', ClientController.destroy);

routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);
routes.delete('/:id/services', ServiceController.destroy);

routes.post('/devicebrands', DeviceBrandController.store);
routes.get('/devicebrands', DeviceBrandController.index);
routes.get('/:id/devicebrands', DeviceBrandController.indexByOrder);
routes.delete('/:id/devicebrands', DeviceBrandController.destroy);

routes.post('/devicemodels', DeviceModelController.store);
routes.get('/devicemodels', DeviceModelController.index);
routes.get('/:DeviceBrand_id/devicemodels', DeviceModelController.indexByOrder);
routes.delete('/:id/devicemodels', DeviceModelController.destroy);

routes.post('/serviceorder', ServiceOrderController.store);
routes.get('/serviceorder', ServiceOrderController.index);
routes.get('/:client_id/serviceorder', ServiceOrderController.SearchByClient);
routes.delete('/:id/serviceorder', ServiceOrderController.destroy);



module.exports = routes;