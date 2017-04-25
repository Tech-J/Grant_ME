const city_state = require('../models/api')
const controller = {}

controller.index = (req,res)=>{

city_state.index()
.then((data)=>{
  res.json(data)
})
.catch((error)=>{
  console.log(error)
})
}

controller.show = (req,res)=>{
const state_code = req.body.data
city_state.show(state_code)
.then((data)=>{
  res.json(data)
})
.catch((error)=>{
  console.log(error)
})
}


module.exports= controller;
