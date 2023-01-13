const controller = require('./controller')
const router = require('express').Router()

router.get('/list', controller.movies.get);

router.post('/list', controller.movies.post);

module.exports = router