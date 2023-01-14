const models = require('../models');
const Movie = require('../dbMysql/index.js')
module.exports = {
  movies: {
    get: async function (req, res) {
      // models.movies.get((err, results) => {
      //   res.json(results)
      // })


      // sequelize
      try {
        const movies = await Movie.findAll()
          res.json(movies)
      } catch (err) {
        console.log(err)
      }
    },

    post: async function (req, res) {
      // models.movies.post(req.body, (err, results) => {
      //   res.json(results)
      // })

      // sequelize
      let params = {
        title: req.body.title,
        description: req.body.description
      }
      try {
        await Movie.create(params)
        res.sendStatus(201)
      } catch (err) {
        res.sendStatus(400)
      }
    },

    delete: async function (req, res) {
      try {
        await Movie.destroy({
          where: { id: req.body.id }
        })
        res.sendStatus(200)
      } catch (err) {
        res.sendStatus(400)
      }
    }
  },
}