var db = require('../dbMysql');

module.exports = {
  movies: {
    get: function (callback) {
      db.query('SELECT * FROM movie_list', (err, res) => {
        if (err) {
          callback(err)
        } else {
          callback(null, res)
        }
      })
    },

    post: function (params, callback) {
      db.query(
        `INSERT INTO movie_list (title, description) VALUES("${params.title}", "${params.description}")`,
        (err) => {
          if (err) {
            callback(err)
          } else {
            callback(null, 'Movie created')
          }
        }
      )
    }
  },
}