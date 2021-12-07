const controller = {}
const Tienda = require('../model/model')
const async = require('async_hooks')


// CREATE
controller.create= async(req, res)=>{

    //los datos a necesitar
    const {
        nombre,
        precio,
        cantidad,
        estado
    }= req.body

    //creacion de nuevo producto
    const nuevo = new Tienda({
        nombre,
        precio,
        cantidad,
        estado
    })


    //VERIFICAR SI EXISTE
    const nombreExiste = await Tienda.findOne({nombre:nombre})
    if(nombreExiste){
        res.json({
            mensaje: 'El producto ya existe'
        })
    }else{

       await nuevo.save()
        res.json({
            mensaje: 'Producto creado',
            id: nuevo._id,
            nombre: nombre,
            precio:precio,
            cantidad:cantidad,
            estado:estado
        })
    }
}
//END CREATE


//  LISTAR TODOS LOS PRODUCTOS
controller.listar = async(req,res) => {
    const respuesta = await Tienda.find()
    res.json(respuesta)
}


//  LISTAR UN PRODICTO ESPECIFICO POR EL ID
controller.PorId = async(req,res) => {
    const id = req.params.id
   const respuesta = await Tienda.findById({_id: id})
   res.json(respuesta)
}


// ELIMINAR PRODUCTO
controller.delete = async (req,res) => {
   const id = req.params.id
   const respuesta = await Tienda.findByIdAndRemove({_id:id})
   res.json({
       mensaje: 'Producto Eliminado'
   })
}


// ACTUALIZAR PRODUCTO
controller.update = async (req,res) => {
   const id = req.params.id
   await Tienda.findByIdAndUpdate({_id:id}, req.body)
   res.json({
       mensaje: 'Producto Actualizado'
   })
}


//ELIMINAR TODO
controller.deleteAll = async (req, res) =>{
    await Tienda.remove()
    res.json({
        mensaje: "Se elimino todo"
    })
}


module.exports = controller;