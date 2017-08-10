"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "todos",
      [
        {
          descrption: "Triple S",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descrption: "Do Laundry you bum",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descrption: "Lift things up and put them down",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descrption: "Make Lunch",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descrption: "Take Vitamins and Medicine",
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
