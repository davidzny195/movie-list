const models = require('../models');

module.exports = {
  movies: {
    get: function (req, res) {
      models.movies.get((err, results) => {
        res.json(results)
      })
    },

    post: function (req, res) {
      models.movies.post(req.body, (err, results) => {
        res.json(results)
      })
    }
  },
}