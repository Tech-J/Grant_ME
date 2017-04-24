const router = require('express').Router()
const path = require('path')

router.use('/api', require('./controller'))
router.get('*' , (req,res)=>{
  res.sendFile(path.resolve('src/index.html'))
})
module.exports = router;
