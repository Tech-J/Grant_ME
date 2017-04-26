import React, { Component } from 'react'
import App from './App'
import Axios from 'axios'
import Selection from './Selection'
import Select from './Select'
import Results from './Results'
import Scroll from 'react-scroll'
import '../styles/App.css'
class License_Permits extends Component{

constructor(){
  super();
  this.state={
    states:null,
    cities:null,
    state_code:null,
    county:null,
    options:null,
    selection:null,
    currentInfo: null
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



currentInfo(example){
this.setState({
  currentInfo:example
})

}


getInfo(e){
    e.preventDefault()
  console.log(this.state.state_code)
  console.log(this.state.county)
  console.log(this.state.selection)
  Axios.post('http://localhost:8080/api/find',{code:this.state.state_code,county:this.state.county,selection:this.state.selection})
  .then((data)=>{
    console.log(data.data.body)
    console.log(data.data.body)
    console.log(JSON.parse(data.data.body).state_sites)
    this.currentInfo(JSON.parse(data.data.body).state_sites)
  })
  .catch((error)=>{
    console.log(error)
  })
Scroll.animateScroll.scrollTo(800)
}



render(){
  let submit = null
  this.state.state_code!==null && this.state.county!==null ? submit =<input type="submit"/> : submit
  let results = null
  this.state.currentInfo!==null ?  results=<Results values={this.state.currentInfo}/> :  results=<h2>Info</h2>

  console.log(this.state.options)
return(
          <div className="main-container">
              <div className="middle">
                    <div className="forms">
                    <h1> Grant Me</h1>
                    <h3> Start Your Business Today</h3>
                    <h3> License and Permits</h3>
                    <form onSubmit={(e)=>{this.getInfo(e)}}>
                    <label>Options</label>
                    <br/>
                    <Select values={this.state.options} value={this.onChangeOptions.bind(this)}/>
                     <br/>
                    <label>State</label>
                    <br/>
                    <Selection values={this.state.states} value={this.onChangeStates.bind(this)}/>
                    <br/>
                    <label>Cities</label>
                    <br/>
                    <Selection values={this.state.cities}   value={this.onChangeCounty.bind(this)}/>
                    {submit}
                    </form>
                    </div>
                  </div>
                            <div className="main-container">
              <div className="middle">
                        {results}
                  </div>
            </div>
            </div>
  )
}
}
export default License_Permits
