const router = require('express').Router();
const { getAll, getById, getByDni } = require('../../models/clientes.model');




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

router.get ('/dni/:clientesdni', async (req,res) =>{
  const {clientesDni} = req.params;
  
  try {
    const [result] = await getByDni(clientesDni);
    res.json(result[0]);
  } catch (error) {
    res.json({fatal: error.message})
  }

})


module.exports = router;