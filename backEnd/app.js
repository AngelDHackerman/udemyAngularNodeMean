'use strict'

let express = require ('express');
let bodyParser = require ('body-parser');

let app = express();

// * cargar archivos de Rutas



// * Middlewares: es un metodo que se ejecuta antes la accion de un controlador.

app.use(bodyParser.urlencoded({extended:false})); // ? Configuracion necesaria para body parser.
app.use(bodyParser.json()); // todo lo que le llegue a body parser lo convertira en json.


// * CORS



// * Rutas



// * exportar

module.exports = app;
