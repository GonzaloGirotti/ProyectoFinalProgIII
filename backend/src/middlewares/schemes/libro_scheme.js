const Joi = require('joi')

let crearLibro = Joi.object({
    titulo: Joi.string().required(),
    autor: Joi.string().required(),
    editorial: Joi.string().required(),
    fecha_publicacion: Joi.date().required()
})

module.exports = { crearLibro }