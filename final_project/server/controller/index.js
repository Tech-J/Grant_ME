const router = require('express').Router()
const controller = require('./controller')

router.get('/states', controller.index)
router.get('/options', controller.options)
router.post('/cities' , controller.show)
router.post('/find',controller.find)
module.exports = router;
