import React from 'react';
import { Link } from 'react-router-dom';


const Results= (props) =>{
console.log(props)
const selectionCreator=(data)=>{
console.log(data)
if (data === null || data===undefined){
  return(<option>Select One</option>)
}else{
      return data.map((data,index)=>{
        console.log(data.url)
        let  option = null
        data.url !== null ? option =<a href={data.url}>{data.url}</a> : option
        console.log(option)
          return(
              <div>
                  <h2>{data.business_type}</h2>
                   <h2>{data.category}</h2>
                   <p>{data.description}</p>
                   <p>{data.link_title}</p>
                   <p>{data.resource_group_description}</p>
                   <p>{data.section}</p>
                   <p>{data.state}</p>
                   {option}
              </div>
           )
      })
}
}
return(
  <div>
    {selectionCreator(props.values)}
    </div>
  )
}
export default Results
