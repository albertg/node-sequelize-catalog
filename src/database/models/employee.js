'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mentorId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.belongsTo(models.Employee,{as: 'mentor', foreignKey: 'mentorId'});
    Employee.hasMany(models.Employee, {as: 'mentees', foreignKey: 'mentorId'});
  };
  return Employee;
};