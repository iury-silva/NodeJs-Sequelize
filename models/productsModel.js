const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.DECIMAL,
  stock: DataTypes.INTEGER,
}, {
  tableName: 'products', // Especifique o nome da tabela aqui
});

module.exports = Product;
