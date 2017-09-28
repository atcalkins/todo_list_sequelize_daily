"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "todos",
      [
        {
          description: "Shower",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Do Laundry you bum",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Lift things up and put them down",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Make Lunch",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Take Vitamins and Medicine",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
