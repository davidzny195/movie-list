const controllers = require('./controllers')
const router = require('express').Router()

router.get('/list', controllers.movies.get);

router.post('/list', controllers.movies.post);

router.delete('/list', controllers.movies.delete);

module.exports = router