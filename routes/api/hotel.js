const router = require('express').Router();
const { getAll, getById, create, deleteById, update } = require('../../models/hotel.model');




router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({fatal: error.message})
  }
})

router.get ('/:hotelesId', async (req,res) =>{
  const {hotelesId} = req.params;
  
  try {
    const [result] = await getById(hotelesId);
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

router.delete('/:hotelesId', async (req, res) => {
  const { hotelesId } = req.params;

  try {
      const [result] = await deleteById(hotelesId);
      res.json({ message: 'hotel borrado' });
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


router.put('/:hotelesId', async (req, res) => {
  const { hotelesId } = req.params;

  try {
      const [result] = await update(hotelesId, req.body);

      const [hotel] = await getById(hotelesId);

      res.json(hotel[0]);
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


module.exports = router;