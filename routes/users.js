var express = require('express');
const { connect } = require('.');
var router = express.Router();
const mysql = require('mysql2');
const { getAll } = require('../models/clientes.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  getAll()
  .then((result) => {
    res.json(result[0]);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;

//GET clietnes por id
router.get('/:clientesId',(req, res)=>{
  const clientesId = parseInt(req.params.clientesId);
  db.query('SELECT * FROM clientes WHERE clientes.id=?', [clientesId])
  .then((result) => {
    res.json(result[0]);
  })
  .catch((error) => {
    console.log(error);
  });

})

//put 
router.get('/new', (req, res) => {
  res.send('Muestra el formulario de nuevo cliente');
});

router.post('/create', (req, res) => {
  console.log(req);
  console.log(req.body);
  res.send('Crear un nuevo cliente');
});

