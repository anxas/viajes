
const getAll = () => {
    return db.query('SELECT * FROM viaje');
}
const getById = (viajeId) => {
    return db.query('SELECT * FROM viaje where id = ?', [viajeId])
}


const create = ({ fecha_ida, fecha_vuelta, id_ida, id_vuelta, hotel }) => {
    return db.query(
        'insert into viaje (fecha_ida, fecha_vuelta, id_ida, id_vuelta, hotel) values (?, ?, ?, ?, ?)',
        [fecha_ida, fecha_vuelta, id_ida, id_vuelta, hotel]
    );
}

const deleteById = (viajeId) => {
    return db.query('delete from viaje where id = ?', [viajeId]);
}

const update = (viajeId, {fecha_ida, fecha_vuelta, id_ida, id_vuelta, hotel }) => {
    return db.query(
        'update viaje set fecha_ida = ?, fecha_vuelta = ?, id_ida = ?, id_vuelta = ?, hotel = ?',
        [fecha_ida, fecha_vuelta, id_ida, id_vuelta, hotel]
    )
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}