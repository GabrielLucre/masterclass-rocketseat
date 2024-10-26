const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const User = require('../models/User.js');
const Addresses = require('../models/Addresses.js');
const Techs = require('../models/Techs.js');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addresses.init(connection);
Techs.init(connection);

User.associate(connection.models);
Addresses.associate(connection.models);
Techs.associate(connection.models);

module.exports = connection;