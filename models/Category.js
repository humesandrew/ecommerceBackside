const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    
    // define columns

    id: {
        type: DataTypes.INT,
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      notNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
