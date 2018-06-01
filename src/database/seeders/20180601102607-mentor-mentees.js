'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [{
      firstName: 'albert',
      lastName: 'george',
      email: 'albert.george@mail.com',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'balaraghavananand',
      lastName: 'aravind',
      email: 'balu.aravind@mail.com',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'jithin',
      lastName: 'pattayil',
      email: 'jithin.pattayil@mail.com',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'rajeesh',
      lastName: 'raveendran',
      email: 'rajeesh.raveendran@mail.com',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'dan',
      lastName: 'chandran',
      email: 'dan.chandran@mail.com',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
