var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/api/cliente');
var viajesRouter = require('./routes/api/viaje');
var hotelesRouter = require('./routes/api/hotel');



var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/cliente', clientesRouter);
app.use('/api/viaje', viajesRouter);
app.use('/api/hotel', hotelesRouter);



module.exports = app;
