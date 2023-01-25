const router = require('express').Router();
const { getAll, getById, create, deleteById, update } = require('../../models/viaje.model');
const { getById: getHotelById  } = require('../../models/hotel.model')
const { getById: getClienteById  } = require('../../models/cliente.model')


router.get('/', async (req, res) => {
  try {
    let[result] = await getAll();
    for(const viaje of result){
    let [hotel] = await getHotelById (viaje.hotel_id);
    let [cliente] = await getClienteById(viaje.cliente_id)
    viaje.hotel = hotel[0];
    viaje.cliente = cliente[0]; 
    }
    res.json(result);
  } catch (error) {
    res.json({fatal: error.message})
  }
})

router.get ('/:viajeId', async (req,res) =>{
  const {viajeId} = req.params;
  
  try {
    const [result] = await getById(viajeId);
    const [hotel] = await getHotelById (result[0].hotel_id);
    const [cliente] = await getClienteById(result[0].cliente_id);
    result[0].hotel = hotel[0];
    result[0].cliente = cliente[0];
    res.json(result[0]);
  } catch (error) {
    res.json({fatal: error.message})
  }

})

router.post('/', async (req, res) => {
  try {
      const [result] = await create(req.body);

      const [viaje] = await getById(result.insertId);

      res.json(viaje[0]);
  } catch (error) {
      res.json({ fatal: error.message })
  }
});

router.delete('/:viajeId', async (req, res) => {
  const { viajeId } = req.params;

  try {
      const [result] = await deleteById(viajeId);
      res.json({ message: 'viaje borrado' });
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


router.put('/:viajeId', async (req, res) => {
  const { viajeId } = req.params;

  try {
      const [result] = await update(viajeId, req.body);

      const [hotel] = await getById(viajeId);

      res.json(hotel[0]);
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


module.exports = router;