
const mysql = require('mysql2');


const conn = mysql.createConnection({


    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'agencia'
});




conn.connect((err) => { console.log(err) })
conn.query('SELECT * FROM agencia.clientes', (err, result) => {
    console.log(err);
    console.log(result);
})

