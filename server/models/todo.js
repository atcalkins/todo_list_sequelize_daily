"use strict";
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define(
    "todo",
    {
      description: DataTypes.TEXT,
      completed: DataTypes.BOOLEAN
    },
    {
      classMethods: {
        associate: function(models) {
        }
      }
    }
  );
  return todo;
};
