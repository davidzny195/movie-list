const express = require('express');
const db = require('./dbMysql');

// Middleware
const morgan = require('morgan');
const cors = require('cors');

// Router
const router = require('./routes.js')

const app = express();
module.exports.app = app

app.set('port', 3000 || process.env.PORT)

// Logging
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/movies', router)


app.use(express.static('client/dist'));

app.listen(app.get('port'));
console.log('Listening on', app.get('port'))