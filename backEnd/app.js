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

app.get('/', (req, res) => { // ? app.get significa que haremos peticiones por get
  res.status(200).send(
    "<h1>Pagina de inicio</h1>"
  )
})

app.post('/test', (req, res) => { // ? app.post, haremos las peticiones por post
  console.log(req.body.nombre) // ? al hacer la solicitud con postman podemos recoger el nombre que le pasamos por x-www-form-urlencoded
  console.log(req.query.web);
  // console.log(req.params.id)
  res.status(200).send({ // ? El estatus 200 significa que se logro con exito.
    message: "Hola mundo desde mi API de NodeJs"
  })
})

// * exportar

module.exports = app;
