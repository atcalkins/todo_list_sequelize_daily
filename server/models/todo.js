"use strict";
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define(
    "todo",
    {
      descrption: DataTypes.TEXT,
      completed: DataTypes.BOOLEAN
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return todo;
};
