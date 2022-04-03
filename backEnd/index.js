'use strict'

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio') // ! Con estas 2 lineas de codigo conectamos nodeJs con la base de datos.
        .then(() => {
          console.log('Conexion a la base de datos establecida con exito!');
        })
        .catch(err => console.error(err));