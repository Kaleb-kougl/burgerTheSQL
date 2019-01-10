// DATABASE
var db = require('../config/database');
var Burger = require('../models/burger');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Burger.sync({ force: true }).then(() => {
//   // Table created
//   return Burger.create({
//     burger_name: "Cheese Burger",
//     devoured: false
//   });
// });

// module.exports(Burger);