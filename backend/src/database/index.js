const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const User = require('../models/User');
const Animal = require('../models/Animal');
const Sanitary = require('../models/Sanitary');

const connection = new Sequelize(dbConfig);

User.init(connection);
Animal.init(connection);
Sanitary.init(connection);

Animal.associate(connection.models);
User.associate(connection.models);
Sanitary.associate(connection.models);

module.exports = connection;