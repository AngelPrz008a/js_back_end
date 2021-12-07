const {Router} = require('express');
const router = Router();
const controller = require('../controller/controlador.js');

router.post('/crear',controller.create)
router.get('/lista',controller.listar)
router.get('/PorId/:id',controller.PorId)
router.delete('/eliminar/:id',controller.delete)
router.put('/actualiza/:id',controller.update)
router.delete('/eliminar',controller.deleteAll)

module.exports = router;