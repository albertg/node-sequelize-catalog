'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'phone', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'phone');
  }
};

/*
  to add/remove multiple columns do the following:
  //add
  return [
      queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'users',
        'encryptedPassword',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ];
    //remove
    return [
      queryInterface.removeColumn('users', 'email'),
      queryInterface.removeColumn('users', 'encryptedPassword')
    ];
*/