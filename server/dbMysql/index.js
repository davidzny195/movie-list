var mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movies',
  socketPath: '/tmp/mysql.sock'
});
db.connect()
module.exports = db