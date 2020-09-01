const knex = require('knex');
const knexConfig = require('../knexfile');

const server = knex(knexConfig.development);

module.exports = server;