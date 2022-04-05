'use strict'

let Project = require('../models/project')

let controller = { 
  home: function (req, res) {
    return res.status(200).send({
      message: 'Soy la home'
    })
  },

  test: function (req, res) { 
    return res.status(200).send({
      message: 'Soy el metodo o accion test del controlador de project'
    })
  },

  saveProject: function (req, res) { // ? Este metodo nos permitira guardar un proyecto en base de datos.
    let project = new Project();

    let params = req.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project.save((err, projectStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar el documento.'}); // ? Si hay un error Regresa un status 500 y manda un mensaje que diga 'Error al guardar el documento'.

      if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'}) // ? Si no hay nada en projectStore, manda un mensaje de error 404 y un mensaje 'No se ha podido guardar el proyecto.'

      return res.status(200).send({project: projectStored}); // ? si todo salio bien regresa un estatus 200 (exitoso) y el objeto que fue guardado en la base de datos.
    })

    return res.status(200).send({
      params: project,
      message: 'Metodo saveProject',
    })
  }
};

module.exports = controller; // ? si ahora importamos contrlles con un requiere en otro archivo, nos va a funcionar