const router = require('express').Router();
const { getAll, getById, create, deleteById, update } = require('../../models/viaje.model');




router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({fatal: error.message})
  }
})

router.get ('/:viajeId', async (req,res) =>{
  const {viajeId} = req.params;
  
  try {
    const [result] = await getById(viajeId);
    res.json(result[0]);
  } catch (error) {
    res.json({fatal: error.message})
  }

})

router.post('/', async (req, res) => {
  try {
      const [result] = await create(req.body);

      const [hotel] = await getById(result.insertId);

      res.json(hotel[0]);
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