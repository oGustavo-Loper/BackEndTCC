'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('machines',
      [{
        machine: 'Stone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machine: 'Alelo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machine: 'BanriCompras',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('machines', null, {});
  }
};