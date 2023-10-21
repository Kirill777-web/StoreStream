// index.js file to seed all tables in the ecommerce_db database
// Import seed functions
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// import sequelize connection
const sequelize = require('../config/connection');

const seedAll = async () => {
  // manual table drop to avoid foreign key constraints
  await sequelize.query('DROP TABLE IF EXISTS product_tags');
  await sequelize.query('DROP TABLE IF EXISTS products');
  await sequelize.query('DROP TABLE IF EXISTS tags');
  await sequelize.query('DROP TABLE IF EXISTS category');

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
