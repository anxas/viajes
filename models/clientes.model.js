
const getAll = () => {
    return db.query('SELECT * FROM clientes');
}
const getById = (clientesId) => {
    return db.query('SELECT * FROM clientes where id = ?', [clientesId])
}

const getByDni = (clientesDni) => {
    return db.query('select * from clientes where dni = ?', [clientesDni]);
}

const create = ({ nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento }) => {
    return db.query(
        'insert into clientes (nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, direccion, email, telefono,dni, fecha_nacimiento]
    );
}
module.exports = {
    getAll,
    getById,
    getByDni,
    create
}