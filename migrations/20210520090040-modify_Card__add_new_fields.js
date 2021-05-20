'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Cards', // table name
        'SetId', // new field name
        
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