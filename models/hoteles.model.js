const getAll = () => {
    return db.query('SELECT * FROM hoteles');
}
const getById = (hotelesId) => {
    return db.query('SELECT * FROM hoteles where id = ?', [hotelesId])
}


const create = ({ nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa }) => {
    return db.query(
        'insert into hoteles (nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa) values (?, ?, ?, ?, ?, ?)',
        [nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa]
    );
}

const deleteById = (hotelesId) => {
    return db.query('delete from hoteles where id = ?', [hotelesId]);
}

const update = (hotelesId, { nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa }) => {
    return db.query(
        'update hoteles set nombre = ?, direccion = ?, ciudad = ?, numero_estrellas = ?, descripcion = ?,  tarifa = ?',
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