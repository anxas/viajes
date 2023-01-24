var router = require('express').Router();

router.use('/clientes', require('./api/clientes'))

module.exports = router;