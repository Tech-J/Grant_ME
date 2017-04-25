import React, { Component } from 'react'
import App from './App'
import Axios from 'axios'
import Selection from './Selection'
class Form extends Component{

constructor(){
  super();
  this.state={
    states:null,
    cities:null,
    state_code:null,
    county:null
  }
}

componentDidMount(){
  Axios.get('http://localhost:8080/api/states')
  .then((data)=>{
    console.log(data.data)
    this.statesStateUpdate(data.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}

getCities(data){
  Axios.post('http://localhost:8080/api/cities',{'data':data})
  .then((data)=>{
    this.citiesStateUpdate(data.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}

statesStateUpdate(data){
  this.setState({
    states:data
  })
}

citiesStateUpdate(data){
  this.setState({
      cities:data
  })
}

onChangeStates(data){
  console.log(data)
  this.setState({
    state_code: data
  })
  this.getCities(data)
}

onChangeCounty(data){
  console.log(this.state.state_code)
  console.log(data)
  this.setState({
    county: data
  })
}

getInfo(e){
e.preventDefault()
console.log(this.state.state_code)
console.log(this.state.county)

}



render(){
  let submit = null
  this.state.state_code!==null && this.state.county!==null ? submit =<input type="submit"/> : submit
return(
          <div className="main-container">
              <div className="middle">
                      <form onSubmit={(e)=>{this.getInfo(e)}}>
                      <label>State</label>
                    <Selection values={this.state.states} value={this.onChangeStates.bind(this)}/>
                     <label>Cities</label>
                    <Selection values={this.state.cities}   value={this.onChangeCounty.bind(this)}/>
                    {submit}
                    </form>
                  </div>
              </div>
  )
}
}
export default Form
