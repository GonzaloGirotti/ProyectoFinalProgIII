const { Router } = require('express')
const librosRoutes = require('../routes/libros_routes')


const rutas_init = () => {
    const router = Router()

    router.use("/libros", librosRoutes)

    return router
}

module.exports = { rutas_init }