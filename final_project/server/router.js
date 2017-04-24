const router = require('express').Router()
const path = require('path')

router.use('/api', require('./controller'))
router.get('*' , (req,res)=>{
  res.sendFile(path.join(__dirname + '/react_front_end/index.html'))
})
module.exports = router;
