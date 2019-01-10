const Sequelize = require('sequelize');
const sequelize = new Sequelize('burgers_db_sequelize', 'root', 'root', {
  "username": "root",
  "password": "root",
  "database": "burgers_db",
  "host": "localhost",
  "port": "8889",
  "dialect": "mysql"
}
);

const Burger = sequelize.define('burger', {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });