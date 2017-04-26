import React from 'react';
import Selection from './Selection'
const Loans_Grants_Results =(props)=>{

const mapper=(data)=>{
if(data===null){
  return(<h1>Federal Gov't</h1>)
}else{
    return data.map((data)=>{
      return(
        <div className="lg">
        <h2>{data.agency}</h2>
        <p>{data.description}</p>
        <p>{data.gov_type}</p>
        <p>{data.industry}</p>
        <p>{data.loan_type}</p>
        <p>{data.state_name}</p>
        <p>{data.title}</p>
        <a href={data.url}>{data.url}</a>
        </div>
        )
    })
}
}
return(
<div className="middlelg">
<h1>Grant Me</h1>
<h3> Start Your Business Today</h3>
<h3>Loans and Grants</h3>
<Selection values={props.value} value={props.func}/>
{mapper(props.values)}
</div>
  )
}
export default Loans_Grants_Results
