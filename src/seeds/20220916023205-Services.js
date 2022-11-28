'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('services',
      [{
        service: 'Tela Completa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service: 'Tela + Tampa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service: 'Vidro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service: 'Vidro + Tampa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service: 'Tampa Traseira',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};