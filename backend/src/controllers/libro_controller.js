const models = require('../database/models/index')
const errorsConstants = require('../const/errors')

module.exports = {

    listar: async (req, res) => {
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

    eliminar: async (req, res, next) => {
        const book = await models.libro.findOne({
            where: {
                id: req.params.idLibro
            }
        })

        if (!book) return next(errorsConstants.LibroInexistente)

        await book.destroy()

        res.json({
            success: true,
            message: 'Libro eliminado correctamente'
        })
    }
}