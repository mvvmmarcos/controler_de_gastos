const jwt = require('jsonwebtoken');
const getToken = require('./get-token');

const checkToken = (req, res, next)=>{
    const token = getToken(req);
    if(!token){
        return res.status(401).json({message:'Acesso negado!'})
    }

    try {
        const verified = jwt.verify(token, 'nosso_secret');
        req.user = verified;
        next();

    } catch (error) {
        return res.status(400).json({message:'Token inválido!'})
    }
}
module.exports = checkToken