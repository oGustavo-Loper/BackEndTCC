'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PaymentMethods',
      [{
        PaymentMethod: 'À vista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PaymentMethod: 'Debito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PaymentMethod: 'Crédito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PaymentMethod: 'Dinheiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PaymentMethod: 'Pix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};