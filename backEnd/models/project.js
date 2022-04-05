'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// todo: Este es el molde para poder crear diferentes objetos.
let ProjectSchema = Schema({
  name: String, // * name: String,se tiene que declara el tipo de dato para mongoDb lo guarde como un string
  description: String,
  category: String,
  year: Number,
  langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema); // * con esto exportamos el "molde a otros archivos", 'project' es el nombre de la identidad, el segundo parametro es el schema tal cual.
