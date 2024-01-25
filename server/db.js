const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.DBUSERNAME,
  host: process.env.HOST,
  database: 'todoapp',
  password: process.env.PASSWORD,
  port: process.env.DBPORT
})

module.exports = pool;