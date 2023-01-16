const controllers = require('./controllers')
const router = require('express').Router()

router.get('/movies', controllers.movies.get);

router.post('/movies', controllers.movies.post);

router.delete('/movies', controllers.movies.delete);

router.put('/movies', controllers.movies.update);

module.exports = router