'use strict';

const models = require('../database/models');
const errorsConstants = require('../const/errors');

module.exports = {
    listar: async (req, res) => {
        try {
            const { genero } = req.query;

            const where = genero ? { genero } : {};
            const books = await models.libro.findAll({ where });

            res.json({
                success: true,
                data: {
                    libros: books
                }
            });
        } catch (error) {
            console.error('Error al listar libros:', error);
            res.status(500).json({ success: false, message: 'Error al obtener libros' });
        }
    },

    crear: async (req, res) => {
        try {
            const book = await models.libro.create(req.body);
            res.json({
                success: true,
                data: {
                    id: book.id
                }
            });
        } catch (error) {
            console.error('Error al crear libro:', error);
            res.status(500).json({ success: false, message: 'Error al crear libro' });
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const book = await models.libro.findOne({
                where: {
                    id: req.params.idLibro
                }
            });

            if (!book) return next(errorsConstants.LibroInexistente);

            res.json({
                success: true,
                data: {
                    libro: book
                }
            });
        } catch (error) {
            console.error('Error al buscar libro:', error);
            res.status(500).json({ success: false, message: 'Error interno' });
        }
    },

    eliminar: async (req, res, next) => {
        try {
            const book = await models.libro.findOne({
                where: {
                    id: req.params.idLibro
                }
            });

            if (!book) return next(errorsConstants.LibroInexistente);

            await book.destroy();

            res.json({
                success: true,
                message: 'Libro eliminado correctamente'
            });
        } catch (error) {
            console.error('Error al eliminar libro:', error);
            res.status(500).json({ success: false, message: 'Error interno' });
        }
    },

    actualizar_estado: async (req, res, next) => {
        try {
            const book = await models.libro.findOne({
                where: {
                    id: req.params.idLibro
                }
            });

            if (!book) return next(errorsConstants.LibroInexistente);

            const { estado_lectura } = req.body;

            book.estado_lectura = estado_lectura;
            await book.save();

            res.json({
                success: true,
                message: 'Estado de lectura actualizado correctamente',
                data: {
                    libro: book
                }
            });
        } catch (error) {
            console.error('Error al actualizar estado:', error);
            res.status(500).json({ success: false, message: 'Error interno' });
        }
    },

    obtenerGeneros: async (req, res) => {
        try {
            const generosRaw = await models.libro.findAll({
                attributes: ['genero'],
                group: ['genero']
            });

            const generos = generosRaw.map(item => item.genero).filter(Boolean);

            if (generos.length === 0) {
                return res.status(404).json({ success: false, message: 'No se encontraron géneros' });
            }

            res.json({
                success: true,
                data: {
                    generos
                }
            });
        } catch (error) {
            console.error('Error al obtener géneros:', error);
            res.status(500).json({ success: false, message: 'Error al obtener géneros' });
        }
    }
};