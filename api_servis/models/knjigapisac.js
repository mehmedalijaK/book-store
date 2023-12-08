'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KnjigaPisac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KnjigaPisac.init({

  }, {
    sequelize,
    modelName: 'KnjigaPisac',
  });
  return KnjigaPisac;
};