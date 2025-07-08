'use strict'

const models = require('../models/index')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.libro.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    titulo: "Cien años de soledad",
                    autor: "Gabriel García Márquez",
                    editorial: "Editorial Sudamericana",
                    genero: "Realismo mágico",
                    estado_lectura: "Leído",
                    fecha_publicacion: new Date("1967-06-05")
                }
            }),
        ])
    },
};