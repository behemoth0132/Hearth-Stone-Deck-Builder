'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Cards', // table name
        'text', // new field name
        'playerClass'
        {
          type: Sequelize.STRING,
          allowNull: true,
      },
    ),
  ]);
},

 down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
    ]);
  },
};