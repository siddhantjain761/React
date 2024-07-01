// props are sed to stablish communication bw two component 

import React, { useEffect, useState } from 'react'

function Propsuse(props) {
    //console.log(props)
    const[items,setItems] = useState([])
    
    useEffect(() =>{
      setItems(props.getNumber())
      console.log("child component")
    },[props.getNumber]) 
    

  return (
    <>
    <h1>hello</h1>
    {items.map(i => (
          <p key={i}>{i}</p>
        ))}
    
     <h3>props meassge from aap.js component :: {props.message}</h3>
    </>

  )
}

export default Propsuse