import React, { Component } from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom';

class App extends Component{
  constructor(){
    super();
    this.state={
      example: 1
    }
  }
stateSet(data){
this.setState({
  example:data
})

}



render(){
      console.log(this.state.example)
    return(
          <div className="main-container">
              <div className="middle">
                  <div className="center">
                      <h1> Grant Me</h1>
                      <p> Start Your Business Today</p>
                      <div className="selections">
                      <button onClick={(e)=>{window.location='/Loans_Grants'}}>Loans and Grants</button>
                      <button onClick={(e)=>{window.location='/License_Permits'}}>Licenses and Permits</button>
                      </div>
                  </div>
              </div>
          </div>
      )
}
}
export default App;
