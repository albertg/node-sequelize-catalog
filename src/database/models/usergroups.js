'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGroups = sequelize.define('UserGroups', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  UserGroups.associate = function(models) {
    // associations can be defined here
  };
  return UserGroups;
};