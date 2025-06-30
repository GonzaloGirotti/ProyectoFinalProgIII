const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: (isLocal) => async (req, res) => {
        const books = await models.libro.findAll();

        res.json({
            success: true,
            data: {
                libros: books
            }
        })
    },

    crear: async (req, res) => {
        const book = await models.libro.create(req.body)

        res.json({
            success: true,
            data: {
                id: book.id
            }
        })
    },

    listarInfo: async (req, res) => {
        const book = await models.libro.findOne({
            where: {
                id: req.params.idLibro
            }
        })
        if (!book) return next(errorsConstants.LibroInexistente)

        res.json({
            success: true,
            data: {
                libro: book
            }
        })
    },

    // eliminar: async (req, res, next) => {
    //     const patient = await models.paciente.findOne({
    //         where: {
    //             id: req.params.idPaciente
    //         }
    //     })

    //     if (!patient) return next(errorsConstants.PacienteInexistente)

    //     await patient.destroy()

    //     res.json({
    //         success: true,
    //         message: 'Paciente eliminado correctamente'
    //     })
    // }
}