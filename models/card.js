'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.card.belongsTo(models.user);
      models.card.belongsTo(models.set);
    }
  };
  card.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    img: DataTypes.STRING,
    playerClass: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    setId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};