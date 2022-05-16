const express = require('express');
const ClientController = require('./controllers/ClientController');
const ServiceController = require('./controllers/ServiceController');
const BrandController = require('./controllers/BrandController');
const ModeloController = require('./controllers/ModeloController');
const ServiceOrderController = require('./controllers/ServiceOrderController');

const routes = express('routes');

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);

routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);

routes.post('/brands', BrandController.store);
routes.get('/brands', BrandController.index);

routes.post('/modelos', ModeloController.store);
routes.get('/modelos', ModeloController.index);

routes.post('/serviceorder', ServiceOrderController.store);
routes.get('/serviceorder', ServiceOrderController.index);



module.exports = routes;