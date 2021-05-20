'use strict';

const setData = [
  {
name:"Inspired",
cardSet:"Classic",
createdAt: new Date(),
updatedAt: new Date()


  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Sets', setData, {});
  },
  



  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

 