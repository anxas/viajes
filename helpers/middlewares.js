const { JsonWebTokenError } = require("jsonwebtoken");

const checkToken = (req, res, next) =>{
//1 comprobar si el token viene incluido en las cabeceras
if (!req.headers['authorization']){
    return res.json({fatal: 'tienes que incluir la cabezera authorization'})
}

const token = req.headers['authorization'];

//2 comprobar si el tokjen es correcto


//3 comprobar si esta caducado el token
let obj;
 try{
    obj = jwt.verify(token, 'en un lugar de la mancha');
   
 } catch(error){
    console.log(error.message);
    return res.json({fatal:'el token es incorrecto'})
    
 }
 console.log(obj)
    next();
}

module.exports = {
    checkToken
}