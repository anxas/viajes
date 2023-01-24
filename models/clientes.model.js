
const getAll = () => {
    return db.query('SELECT * FROM clientes');
}
const getById = (clientesId) => {
    return db.query('SELECT * FROM clientes where id = ?', [clientesId])
}

const getByDni = (clientesDni) => {
    return db.query('select * from clientes where dni = ?', [clientesDni]);
}
module.exports = {
    getAll,
    getById,
    getByDni
}