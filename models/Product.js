// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INT,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      type: DataTypes.STRING,
      notNull: true
    },

    price: {
      type: DataTypes.DECIMAL,
      notNull: true,
      validate: {
        isDecimal: true
      },

      stock: {
        type: DataTypes.STRING,
        notNull: true,   
        defaultValue: 10,
        validate: {
          isNumber: true,
        }
      },

      category_id: {
        type: DataTypes.INT,
        references: {
          model: 'category',
          key: 'id',
      }


      }, 
      
    
    // define columns
    }, 
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
