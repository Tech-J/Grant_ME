const db =require('../database/grantMe')
const requestify = require('requestify')

const city_state = {}

city_state.index =() =>{
 return db.any("SELECT * FROM states")

}

city_state.show=(data)=>{
  console.log(data)
 return db.any('SELECT city as state, county as state_code  FROM cities LEFT JOIN states on states.state_code = cities.state_code WHERE cities.state_code=$1 ORDER BY cities.city',
      [data])
}

city_state.options=()=>{
  return db.any('SELECT * FROM business_type')
}

city_state.find = (data) =>{
  console.log(data)
  return requestify.get('http://api.sba.gov/license_permit/state_and_city/'+data.selection+'/'+data.code+'/'+data.county+'.json')
}
city_state.loans = ()=>{
  return requestify.get('http://api.sba.gov/loans_grants/federal.json')
}


module.exports = city_state;
