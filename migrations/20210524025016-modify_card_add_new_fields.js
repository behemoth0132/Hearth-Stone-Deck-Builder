'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'card', 
      'id',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
  )},
    
};
