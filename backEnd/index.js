'use strict'

let mongoose = require('mongoose');
let app = require('./app'); // ? Este es el archivo que tiene la configuracion de express.
let port = 3700; // ? Con esto le decimos que puerto usaremos para nuestro servidor.

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio') // ! Con estas 2 lineas de codigo conectamos nodeJs con la base de datos.
        .then(() => {
          console.log('Conexion a la base de datos establecida con exito!');

          // Creacion del servidor

          app.listen(port, () => {
            console.log(`Servidor corriendo correctamente en la url: localhost:${port}`)
          })


        })
        .catch(err => console.error(err));