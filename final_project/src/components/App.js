import React, { Component } from 'react'
import '../styles/App.css'
class App extends Component{
  constructor(){
    super();
    this.state={
      example: 1
    }
  }

render(){
    return(
          <div className="main-container">
          <div className="middle">
          <div className="center">
              <h1> Grant Me</h1>
              <p> Start Your Business Today</p>
              <div className="selections">
              <button>Loans and Grants</button>
              <button>Licenses and Permits</button>
              </div>
          </div>
          </div>
          </div>
      )
}
}
export default App;
