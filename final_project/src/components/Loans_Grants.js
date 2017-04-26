import React, { Component } from 'react';
import Axios from 'axios';
import LoansGrants from './Loans_Grants_Results'
class Loans_Grants extends Component{
    constructor(){
      super();
      this.state={
        loans:null,
        states:null,
        state_code:null
      }
    }

statesStateUpdate(data){
  this.setState({
    states:data
  })
}
loanSetState(data){
this.setState({
  loans:data
})
}

onChangeStates(data){
  console.log(data)
  this.setState({
    state_code: data
  })
console.log(data)
console.log(this.state.state_code)
}


componentDidMount(){
Axios.get('http://localhost:8080/api/loans')
.then((data)=>{
  console.log(data.data)
  this.loanSetState(data.data)
})
.catch((error)=>{
  console.log(error)
})
  Axios.get('http://localhost:8080/api/states')
  .then((data)=>{
    console.log(data.data)
    this.statesStateUpdate(data.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}


render(){
  return(
        <div className="main-container">
        <LoansGrants values={this.state.loans} value={this.state.states} func={this.onChangeStates.bind(this)}/>
        </div>
      )
}


}
export default Loans_Grants
