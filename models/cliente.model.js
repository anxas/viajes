
const getAll = () => {
    return db.query('SELECT * FROM cliente');
}
const getById = (clienteId) => {
    return db.query('SELECT * FROM cliente where id = ?', [clienteId])
}


const create = ({ nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento }) => {
    return db.query(
        'insert into cliente (nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento]
    );
}

const deleteById = (clientId) => {
    return db.query('delete from cliente where id = ?', [clientId]);
}

const update = (clienteId, { nombre, apellidos, direccion, email, telefono, dni, fecha_nacimiento }) => {
    return db.query(
        'update cliente set nombre = ?, apellidos = ?, direccion = ?, email = ?, telefono = ?, dni = ? where id = ?,  fecha_nacimiento = ?',
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