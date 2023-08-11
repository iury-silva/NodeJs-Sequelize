const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;
