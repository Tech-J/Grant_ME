const db =require('../database/grantMe')
const reuestify = require('requestify')

const city_state = {}

city_state.index =() =>{
 return db.any("SELECT * FROM states")

}

city_state.show=(data)=>{
  console.log(data)
 return db.any('SELECT city as state, county as state_code  FROM cities LEFT JOIN states on states.state_code = cities.state_code WHERE cities.state_code=$1 ORDER BY cities.city',
      [data])
}

module.exports = city_state;
