const express = require ('express')
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');

const app =  express()


//requiere bd
require('./db');

//puerto
app.set('PORT', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origen: '*'}));

//puesto
app.listen(app.get('PORT'), () => {

    console.log('Servidor en uso:',app.get('PORT'))

})


//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//rutas
app.use('/TiendaCompra', require('./routes/rutas.js'))