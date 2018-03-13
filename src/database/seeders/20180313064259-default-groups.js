'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups',[{
      groupName: 'Administrator',
      groupDescription: 'Administrator of the site',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      groupName: 'Product Owner',
      groupDescription: 'Administration of a classified product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      groupName: 'Normal User',
      groupDescription: 'Default group for all users with minimal privileges',
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
