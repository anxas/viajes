
const getAll = () => {
    return db.query('select * clientes');
}
const getById = (clientesId) => {
    return db.query('select * from clientes where id = ?', [clientesId])
}

const getByDni = (dni) => {
    return db.query('select * from clientes where dni = ?', [dni]);
}