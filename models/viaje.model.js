
const getAll = () => {
    return db.query('SELECT * FROM viaje');
}
const getById = (viajeId) => {
    return db.query('SELECT * FROM viaje where id = ?', [viajeId])
}


const create = ({ fecha_salida, fecha_vuelta, id_ida, id_vuelta, hotel_id, cliente_id }) => {
    return db.query(
        'insert into viaje (fecha_salida, fecha_vuelta, id_ida, id_vuelta, hotel_id, cliente_id) values (?, ?, ?, ?, ?, ?)',
        [fecha_salida, fecha_vuelta, id_ida, id_vuelta, hotel_id, cliente_id]
    );
}

const deleteById = (viajeId) => {
    return db.query('delete from viaje where id = ?', [viajeId]);
}

const update = (viajeId, {fecha_salida, fecha_vuelta, id_ida, id_vuelta, hotel_id, cliente_id}) => {
    return db.query(
        'update viaje set fecha_salida = ?, fecha_vuelta = ?, id_ida = ?, id_vuelta = ?, hotel_id = ?, cliente_id = ?',
        [fecha_salida, fecha_vuelta, id_ida, id_vuelta, hotel_id, cliente_id]
    )
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}