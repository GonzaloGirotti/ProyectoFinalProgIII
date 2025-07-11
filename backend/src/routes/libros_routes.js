const router = require("express").Router()
const libroController = require('../controllers/libro_controller')
const validate = require('../middlewares/validate')
const libro_scheme = require('../middlewares/schemes/libro_scheme')

router.get('/', libroController.listar)
router.post('/', validate(libro_scheme.crearLibro), libroController.crear)
router.get('/:idLibro', libroController.listarInfo)
router.delete('/:idLibro', libroController.eliminar)
router.put('/:idLibro/estado', libroController.actualizar_estado)

module.exports = router