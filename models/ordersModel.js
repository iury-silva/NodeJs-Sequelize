const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Order = sequelize.define('Order', {
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: DataTypes.DECIMAL,
  status: DataTypes.STRING,
  products: DataTypes.ARRAY(DataTypes.JSONB),
}, {
  tableName: 'orders', // Especifique o nome da tabela aqui
});

module.exports = Order;