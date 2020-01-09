'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        username : "1753020",
        email : "test@gmail.com",
        password : "$2a$10$8SdDT5.npWUnNmNA0yr62eGiQgu/2R9Bqu.YrKcrXkGll/DpUolJ6",
        isAdmin : "false"
      }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
