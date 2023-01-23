const router = require('express').Router();

const { getAll } = require("../../models/clientes.model")

router.get('/', async(req,res)=>{
    try{
        const[result] = await getAll()
        res.json(result);
    }catch(error){
        res.json({fatal: error.message});
    }
});
// router.get('/:clientesId', async (req, res) => {
//     const { clientesId } = req.params;

//     try {
//         const [result] = await getById(clientesId);
//         if (result.length === 0) {
//             res.json({ fatal: 'No se ha encontrado el cliente' });
//         }
//         res.json(result[0]);
//     } catch (error) {
//         res.json({ fatal: error.message });
//     }
// });
