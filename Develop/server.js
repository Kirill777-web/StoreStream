const express = require('express');
const routes = require('./routes');
// import sequelize connection
// Path: Develop/config/connection.js
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Code to parse incoming JSON data
app.use(express.json());
// Code to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
