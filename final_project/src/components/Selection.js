import React from 'react';
// import Select from 'react-select';

const Selection = (props) =>{

const selectionCreator=(data)=>{
if (data === null|| data===undefined){
  return(<option>Select One</option>)
}else{
      return data.map((data,index)=>{
          return(<option key={index} value={data.state_code} >{data.state}</option>)
      })
}
}
return(
  <select onChange={(e)=>{props.value(e.target.value)}}>
    {selectionCreator(props.values)}
    </select>
  )
}
export default Selection