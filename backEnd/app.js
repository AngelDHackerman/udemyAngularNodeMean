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

app.get('/', (req, res) => {
  res.status(200).send(
    "<h1>Pagina de inicio</h1>"
  )
})

app.get('/test', (req, res) => { 
  res.status(200).send({ // ? El estatus 200 significa que se logro con exito.
    message: "Hola mundo desde mi API de NodeJs"
  })
})

// * exportar

module.exports = app;
