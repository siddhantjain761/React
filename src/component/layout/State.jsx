import React, { useState,useCallback } from 'react'
import Propsuse from './Propsuse'

function State() {

    const[data,setData] = useState('React var')
    const[count,setCount] = useState(0)
    const[number,setNumber] = useState(1)
    
    function UpdateData(){
      setData('React var updated')
    }

    const getNumber = useCallback(() => {
      return [number,number+1]
    }, [number]);   

  return (
    <>
    <h1>{data}</h1>
    <p>Your count is : {count}</p>
    <button className='bg-warning' onClick={UpdateData}>Click Me</button> 
     <br /><br />
    <button className='bg-success' onClick={()=>setCount(count+1)}>Click to increse the count</button>

    <input type="text" onChange={(e)=>setNumber(parseInt(e.target.value))} />
    <Propsuse getNumber={getNumber}   />
     
    </>
  )
}

export default State