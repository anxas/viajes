const router = require('express').Router();
const { getAll, getById, create, deleteById, update } = require('../../models/clientes.model');




router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({fatal: error.message})
  }
})

router.get ('/:clientesId', async (req,res) =>{
  const {clientesId} = req.params;
  
  try {
    const [result] = await getById(clientesId);
    res.json(result[0]);
  } catch (error) {
    res.json({fatal: error.message})
  }

})

router.post('/', async (req, res) => {
  try {
      const [result] = await create(req.body);

      const [cliente] = await getById(result.insertId);

      res.json(cliente[0]);
  } catch (error) {
      res.json({ fatal: error.message })
  }
});

router.delete('/:clientesId', async (req, res) => {
  const { clientesId } = req.params;

  try {
      const [result] = await deleteById(clientesId);
      res.json({ message: 'Cliente borrado' });
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


router.put('/:clientesId', async (req, res) => {
  const { clientesId } = req.params;

  try {
      const [result] = await update(clientesId, req.body);

      const [cliente] = await getById(clientesId);

      res.json(cliente[0]);
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


module.exports = router;