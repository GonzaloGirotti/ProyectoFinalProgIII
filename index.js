const express = require('express') //Import de express
const globalConstants = require('./backend/src/const/globalConstants') //Import de las constantes de uso global
const routerConfig = require('./backend/src/routes/index_routes') //Import de Configuracion de rutas
const errorHandler = require('./backend/src/middlewares/error') //Import de las constantes de errores de peticion
let createError = require('http-errors')
const database = require('./backend/src/database/config/db') //Import de la configuracion de la base de datos
const dotenv = require('dotenv');
const path = require('path')

const configuracionMiddlewares = (app) => {
    app.use(express.json()) //puede recibir json
    app.use(express.urlencoded({ extended: true })) //entiende los posts y put
    return;
}

const configuracionRouter = (app) => {
    app.use('/api/v1/', routerConfig.rutas_init())  // rutas iniciales

    app.use(function (req, res, next) {
        next(createError(404)) // si no encuentra la ruta, envia error 404
    })
    app.use(errorHandler)
}


const init = () => {
    const app = express() // instanciamos express
    configuracionMiddlewares(app) // configurar los middlewares
    database.connectDB() // conecta a la DB

    configuracionRouter(app) // configurar rutas

    app.listen(globalConstants.PORT)
    console.log(`La app se ejecuta en el puerto: ${globalConstants.PORT}`)
}

init();