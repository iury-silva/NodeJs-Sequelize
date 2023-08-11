'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('orders', 'id', 'orderId');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('orders', 'orderId', 'id');
  }
};
