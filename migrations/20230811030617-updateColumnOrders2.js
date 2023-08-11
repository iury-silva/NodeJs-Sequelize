'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //drop column products from orders
    await queryInterface.removeColumn('orders', 'products');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('orders', 'products', {
      type: Sequelize.ARRAY(Sequelize.INTEGER), // ou o tipo original apropriado
      using: 'products::integer[]', // Converte de volta para o tipo original
    });
  }
};
