'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DeviceModels',
      [{
        DeviceModel: '8g',
        DeviceBrand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: '8 Plus',
        DeviceBrand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'X',
        DeviceBrand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: '11 Pro Max',
        DeviceBrand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'G8 Plus',
        DeviceBrand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'Moto One Action',
        DeviceBrand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'Moto One Vision',
        DeviceBrand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'G20',
        DeviceBrand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'S10 Plus',
        DeviceBrand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'A21',
        DeviceBrand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'A10',
        DeviceBrand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'A53',
        DeviceBrand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'Redmi Note 11',
        DeviceBrand_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'Redmi 10',
        DeviceBrand_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: '11 Lite',
        DeviceBrand_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        DeviceModel: 'Redmi 9A',
        DeviceBrand_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DeviceModels', null, {});
  }
};