import React, { Component } from 'react'
import App from './App'
import Axios from 'axios'
import Selection from './Selection'
import Select from './Select'
class Form extends Component{

constructor(){
  super();
  this.state={
    states:null,
    cities:null,
    state_code:null,
    county:null,
    options:null,
    selection:null
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
  Axios.get('http://localhost:8080/api/options')
  .then((data)=>{
    console.log(data)
    this.optionsSet(data.data)
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

optionsSet(data){
  this.setState({
    options: data
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

onChangeOptions(data){
this.setState({
  selection:data
})
}

getInfo(e){
  e.preventDefault()
  console.log(this.state.state_code)
  console.log(this.state.county)
  console.log(this.state.selection)
}



render(){
  let submit = null
  this.state.state_code!==null && this.state.county!==null ? submit =<input type="submit"/> : submit
  console.log(this.state.options)
return(
          <div className="main-container">
              <div className="middle">
                    <form onSubmit={(e)=>{this.getInfo(e)}}>
                    <label>Options</label>
                    <Select values={this.state.options} value={this.onChangeOptions.bind(this)}/>
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
