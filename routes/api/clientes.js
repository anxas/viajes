const router = require('express').Router();
const { getAll, getById, create } = require('../../models/clientes.model');




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


module.exports = router;