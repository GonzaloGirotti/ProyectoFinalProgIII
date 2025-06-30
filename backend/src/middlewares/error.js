const errorsConsts = require('../const/errors')

module.exports = function (err, req, res, next) {

    let response = {
        success: false,
        error: {
            code: err.code || 500, // si no hay error code, sale 500
            message: err.message || 'Internal server error' // si no hay error message, sale Internal...
        }
    }

    if (err.isJoi) {
        let validationErrorType = err.details[0].type // guardo el tipo de error
        let errorKey = 'ValidationError' // por defecto asumimos que es error de validacion

        if (validationErrorType === 'any.required') { //si el error de validar es por requerido, cambia el key
            errorKey = 'FaltanCampos'
        }

        response.error.code = errorsConsts[errorKey].code //el codigo del error proviene del archivo importado
        response.error.message = errorsConsts[errorKey].message //el mensaje del error proviene del archivo importado
        //Si el errorKey es 'ValidationError', el code que proviene va a ser del objeto con key 
        //'ValidationError', y asi tambien si es 'FaltanCampos'. Todo declarado en el archivo 'error.js' directorio 'const'.
    }

    if (err.message === 'Not Found') {
        response.error.code = 404
        response.error.message = 'Not found'
    }

    res.status(500).json(response)

}