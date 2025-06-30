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
        fecha_publicacion: {
            type: DataTypes.DATE,
            allowNull: false
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