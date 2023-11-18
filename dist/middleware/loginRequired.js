"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req,res, next) => {
    const {authorization} = req.headers;
    if(!authorization) return res.status(401).json("Login inválido")

    const [, token] = authorization.split(' ');

    try{
        const dados = _jsonwebtoken2.default.verify(token, 'gdf51dfg5df1gdf6dg1gdf6gdf1gdg56g1dfdgf65g1dgd5gd1gdf6');
        const { id, email } = dados;

        const user = await _User2.default.findOne({
            where: {
                id: id.id, 
                email
            }
        })
        
        if(!user) return res.status(401).json("Usuário Inválido")

        req.userId = id;
        req.userEmail = email;
        
        return next()
    }catch(err){
        return res.status(401).json("Token inválido")
    }
}


// como teste foi passado a header no insomnia
// authorization : Bearer + token
