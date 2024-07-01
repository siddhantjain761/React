import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[count,setCount] = useState(0);
    const[data,setData] = useState(0);
    //useEffecr hook is autometically fired when the page reloads , it also fires when even any buttonis prressed to avoid this use below syntax:
    // useEffect(()=>{
    //     console.log("count is " , count)
    // },[]) 

    useEffect(()=>{
        console.log("count is " , count)
    },[]) 

    useEffect(()=>{
        console.log("data is " , data)
    },[data]) 
    
  return (
    <>
    <h1>count hook is fired : {count} </h1>
    <h1>data hook is fired : {data} </h1>
    <button onClick={()=>{setCount(count + 1 )}}>count hook click me</button>
    <button onClick={()=>{setData(data + 1 )}}>data hook click me</button>
    </>
  )
}

export default UseEffect