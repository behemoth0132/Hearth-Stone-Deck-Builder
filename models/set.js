'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    models.set.hasMany(models.card);//set has many cards
    }  
  };
  set.init({
    name: DataTypes.STRING,
    cardSet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'set',
  });
  return set;
};