'use strict';

const cardData = [
  {
name:"Inspired",
text:"This minion has +2 Attack this turn.",
playerClass:"Neutral",
createdAt: new Date(),
updatedAt: new Date()


  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Cards', cardData, {});
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
