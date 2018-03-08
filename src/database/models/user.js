'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING(24),
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};