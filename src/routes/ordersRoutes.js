const express = require('express');
const routes = express.Router();

const ordersController = require('../../controllers/ordersController');

routes.post('/createOrder', ordersController.create);
routes.get('/getOrders', ordersController.getAll);
routes.get('/getOrders/:id', ordersController.getById);
routes.delete('/cancelOrder/:orderId', ordersController.remove);

module.exports = routes;