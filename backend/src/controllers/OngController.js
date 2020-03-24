const crypto = require('crypto');  /** Ulizado para pegar Ids aleatorios */
const connection = require('../database/connection');

module.exports= {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
       return response.json({ongs});
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;    /**Garante que o usuario envie so o que queremos */

        const id = crypto.randomBytes(4).toString('HEX');           /**Vai gerar um id de 4 bytes de HExadecimal */

   await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       uf,
   })

    return response.json({ id });
    }
};