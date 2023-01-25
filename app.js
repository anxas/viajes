var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientesRouter = require('./routes/api/clientes');
var viajesRouter = require('./routes/api/viajes');
var hotelesRouter = require('./routes/api/hoteles');
const apiRouter = require('./routes/api')


var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/viajes', viajesRouter);
app.use('/api/hoteles', hotelesRouter);
app.use('api', apiRouter);


module.exports = app;
