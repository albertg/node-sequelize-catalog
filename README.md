# steps to add a new model and migration

* Create the database
$ node_modules\.bin\sequelize db:create

* Create folders and config for migrations
$ node_modules/.bin/sequelize init

* Create a new model and migration
$ node_modules/.bin/sequelize model:generate --name <MODELNAME> --attributes ATT1NAME:DATATYPE,ATT2NAME:DATATYPE,ATT3NAME:DATATYPE
eg: $ node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

* Create a migration file
$ node_modules/.bin/sequelize migration:create --name NAME-OF-THE-MIGRATION
eg: $ node_modules/.bin/sequelize migration:create --name add-email-and-password-to-user

* Add code to create the migration
eg: 
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING(24)
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

* Creating seed data
$ node_modules/.bin/sequelize seed:generate --name NAME-OF-SEED
eg: $ node_modules/.bin/sequelize seed:generate --name demo-user

* Running the migration
$ node_modules\.bin\sequelize db:migrate

* Running the seed
$ node_modules\.bin\sequelize db:seed:all
