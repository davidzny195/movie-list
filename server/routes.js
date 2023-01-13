const controllers = require('./controllers')
const router = require('express').Router()

router.get('/list', controllers.movies.get);

router.post('/list', controllers.movies.post);

module.exports = router