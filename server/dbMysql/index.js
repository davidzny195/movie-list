var mysql = require('mysql2');
var Sequelize = require('Sequelize')
var orm = new Sequelize('movies', 'root', '12345678', {
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/tmp/mysql.sock'
  },
  define: {
    timestamps: false
  }
})

const Movie = orm.define('Movie', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  watched: Sequelize.BOOLEAN
})

Movie.sync()
module.exports = Movie
// const db = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'movies',
//   socketPath: '/tmp/mysql.sock'
// });
// db.connect()
// module.exports = db