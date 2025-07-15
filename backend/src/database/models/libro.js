'use strict'

module.exports = (sequelize, DataTypes) => {

    let Libro = sequelize.define('libro', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        autor: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        editorial: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        estado_lectura: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'No leído' // Valor por defecto
        },
        fecha_publicacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        reseña: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        valoracion: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5
            }
        },
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true
    })

    Libro.associate = models => {
    }

    return Libro
}