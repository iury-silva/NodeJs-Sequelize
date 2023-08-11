/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 * 
 * /getProducts:
 *   get:
 *     tags: [Products]
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of products.
 *         content:
 *           application/json:
 *             example:
 *               - id: 2
 *                 name: Banana
 *                 description: Fruta amarela
 *                 price: 10.99
 *               - id: 3
 *                 name: Maçã
 *                 description: Fruta vermelha
 *                 price: 5.99
 *               - id: 4
 *                 name: Pera
 *                 description: Fruta verde
 *                 price: 7.99
 *               - id: 5
 *                 name: Uva
 *                 description: Fruta roxa
 *                 price: 12.99
 *               - id: 1
 *                 name: Abacaxi
 *                 description: Fruta azeda
 *                 price: 10.99
 *               - id: 6
 *                 name: Morango
 *                 description: Uma excelente fruta para acompanhar um açai gelado!
 *                 price: 12.00
 * 
 *       500:
 *         description: Internal server error.
 */



const express = require('express');
const routes = express.Router();

const productsController = require('../../controllers/productsController');


routes.post('/createProduct', productsController.create);
routes.get('/getProducts', productsController.getAll);
routes.get('/getProducts/:id', productsController.getById);
routes.put('/updateProduct/:id', productsController.update);
routes.delete('/removeProduct/:id', productsController.remove);

module.exports = routes;