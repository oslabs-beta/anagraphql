
const user = require('os').userInfo().username;

const host = 'localhost';
const database = 'anagraph_db';
const password = 'node_password';
const port = 5432;


const connString = `postgresql://${user}:${password}@${host}:${port}/${database}`;


module.exports = connString;
