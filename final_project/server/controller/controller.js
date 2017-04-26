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

controller.options = (req,res)=>{
city_state.options()
.then((data)=>{
  console.log(data)
  res.json(data)
})
.catch((error)=>{
  console.log(error)
})
}
controller.find = (req, res)=>{
console.log(req.body)
city_state.find(req.body)
.then((data)=>{
res.json(data)
})
.catch((error)=>{
  console.log(error)
})
}

controller.loans = (req, res)=>{
city_state.loans()
.then((data)=>{
  console.log(data)
  newData = JSON.parse(data.body)
  res.json(newData)
})
.catch((error)=>{
  console.log(error)
})

}


module.exports= controller;
