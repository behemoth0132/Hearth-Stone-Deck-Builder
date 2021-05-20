'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.Card.belongsTo(models.Set);//card belongs to set
    }
  };
  Card.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    playerClass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};