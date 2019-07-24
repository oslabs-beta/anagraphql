const { Pool } = require('pg');
const user = require('os').userInfo().username;


module.exports = new Pool({
  user,
  host: 'localhost',
  database: 'anagraph_db',
  password: 'node_password',
  port: 5432,
});
