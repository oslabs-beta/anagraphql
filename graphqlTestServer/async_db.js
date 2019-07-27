

const user = require('os').userInfo().username;

const host = 'localhost';
const database = 'anagraph_db';
const password = 'node_password';
const port = 5432;

// postgres://YourUserName:YourPassword@YourHost:5432/YourDatabase
const connString = `postgresql://${user}:${password}@${host}:${port}/${database}`;


module.exports = connString;
