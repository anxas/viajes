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
router.get('/:clientesId',(req, res)=>{
  const clientesId = parseInt(req.params.clientesId);
  conn.connect((err)=>{
    conn.query('SELECT * FROM clientes WHERE clientes.id=?',
    [clientesId], (err, result)=>{
      res.json(result)
    })
  })
})