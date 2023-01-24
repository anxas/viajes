var express = require('express');
const { connect } = require('.');
var router = express.Router();
const mysql = require('mysql2');

const conn = mysql.createConnection({


  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'agencia'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.connect((err)=>{
    conn.query('SELECT * FROM clientes', (err, result)=>{
      res.json(result)
    })
  })
});

module.exports = router;

//GET clietnes por id
router.get('/:clienteId',(req, res)=>{
  const clienteId = parseInt(req.params.clienteId);
})