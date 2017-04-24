const city_state = require('../models/api')
const controller = {}

controller.index = (req,res)=>{
city_state.index()
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})
}

controller.show = (req,res)=>{
city_state.show()
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})


}


module.exports= controller;
