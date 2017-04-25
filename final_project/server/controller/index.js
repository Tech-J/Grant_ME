const router = require('express').Router()
const controller = require('./controller')

router.get('/states', controller.index)
router.post('/cities' , controller.show)

module.exports = router;
