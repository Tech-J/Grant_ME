const db =require('../database/grantMe')
const reuestify = require('requestify')

const city_state = {}

city_state.index =() =>{
 return db.any("SELECT * FROM states")

}

city_state.show =()=>{

 return db.many("SELECT  city FROM cities WHERE City = "+"KARLUK")
}

module.exports = city_state;
