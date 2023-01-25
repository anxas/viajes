
const getAll = () => {
    return db.query('SELECT * FROM clientes');
}
const getById = (clientesId) => {
    return db.query('SELECT * FROM clientes where id = ?', [clientesId])
}


const create = ({ nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento }) => {
    return db.query(
        'insert into clientes (nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento]
    );
}

const deleteById = (clientId) => {
    return db.query('delete from clientes where id = ?', [clientId]);
}

const update = (clientesId, { nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento }) => {
    return db.query(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, telefono = ?, dni = ? where id = ?,  fecha_nacimiento = ?',
        [nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento]
    )
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}