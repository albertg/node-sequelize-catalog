'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    groupName: DataTypes.STRING,
    groupDescription: DataTypes.STRING,
    isDefault: DataTypes.BOOLEAN
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsToMany(models.User, {
      through: 'UserGroups',
      as: 'users',
      foreignKey: 'groupId'
    });
  };
  return Group;
};