const uuid = require('uuid')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  author.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};