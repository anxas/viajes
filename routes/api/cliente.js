const router = require('express').Router();
const { getAll, getById, create, deleteById, update } = require('../../models/cliente.model');




router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({fatal: error.message})
  }
})

router.get ('/:clienteId', async (req,res) =>{
  const {clienteId} = req.params;
  
  try {
    const [result] = await getById(clienteId);
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

router.delete('/:clienteId', async (req, res) => {
  const { clienteId } = req.params;

  try {
      const [result] = await deleteById(clienteId);
      res.json({ message: 'Cliente borrado' });
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


router.put('/:clienteId', async (req, res) => {
  const { clienteId } = req.params;

  try {
      const [result] = await update(clienteId, req.body);

      const [cliente] = await getById(clienteId);

      res.json(cliente[0]);
  } catch (error) {
      res.json({ fatal: error.message });
  }
});


module.exports = router;