'use strict';
module.exports = (sequelize, DataTypes) => {
  var LoginHistory = sequelize.define('LoginHistory', {
    userId: DataTypes.INTEGER,
    lastLogin: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  LoginHistory.associate = function(models) { 
  };
  return LoginHistory;
};