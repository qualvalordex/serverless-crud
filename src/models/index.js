const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../../config/config.json')[env]

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

const User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = { User };
