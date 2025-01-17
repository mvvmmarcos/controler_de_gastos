const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserByToken = async(token) =>{
    if (!token) return res.status(401).json({ error: "Acesso negado!" });
    const decoded = jwt.verify(token, 'nosso_secret');
    const userId = decoded.id;
    const user = await User.findOne({where:{id:userId}});

    return user
}
module.exports = getUserByToken