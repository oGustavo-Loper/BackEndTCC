'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DeviceBrands',
      [{
        DeviceBrand: 'Iphone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceBrand: 'Motorola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceBrand: 'Samsung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceBrand: 'LG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceBrand: 'Xiaomi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DeviceBrands', null, {});
  }
};