'use strict'

let express = require ('express');
let bodyParser = require ('body-parser');

let app = express();

// * cargar archivos de Rutas

let project_routes = require('./routes/project')

// * Middlewares: es un metodo que se ejecuta antes la accion de un controlador.

app.use(bodyParser.urlencoded({extended:false})); // ? Configuracion necesaria para body parser.
app.use(bodyParser.json()); // todo lo que le llegue a body parser lo convertira en json.


// * CORS



// * Rutas

app.use('/api', project_routes); // ? esto agregara algo como /api/home o /api/test


// * exportar

module.exports = app;
