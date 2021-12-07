
//modelo
const mongoose = require('mongoose')
const {Schema}= mongoose


const Tienda = new Schema({
    nombre:{type:String},
    precio:{type:String},
    cantidad:{type:String},
    estado:{type:String}
    //disponible
    //agotado
})

// convertir modelo
module.exports = mongoose.model('Tienda',Tienda )

