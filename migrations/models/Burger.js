const Sequelize = require('sequelize');
const db = require('../../config/database');

// BURGER MODEL
const Burger = db.define('burger',
  {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  }
);

module.exports = Burger;