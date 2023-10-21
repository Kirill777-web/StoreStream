//Script to drop all tables in the database
//dotenv is used to connect to the .env file and db is used to connect to the connection.js file
require('dotenv').config({ path: '../.env' });

//Connect to the database
const sequelize = require('../config/connection');

//drop all tables in the database
sequelize.sync({ force: true }).then(() => {
  console.log('All tables dropped!');
  process.exit(0);
});
