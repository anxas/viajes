const getAll = () => {
    return db.query('SELECT * FROM hotel');
}
const getById = (hotelId) => {
    return db.query('SELECT * FROM hotel where id = ?', [hotelId])
}


const create = ({ nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa }) => {
    return db.query(
        'insert into hotel (nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa) values (?, ?, ?, ?, ?, ?)',
        [nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa]
    );
}

const deleteById = (hotelId) => {
    return db.query('delete from hotel where id = ?', [hotelId]);
}

const update = (hotelId, { nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa }) => {
    return db.query(
        'update hotel set nombre = ?, direccion = ?, ciudad = ?, numero_estrellas = ?, descripcion = ?,  tarifa = ?',
        [nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa]
    )
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}