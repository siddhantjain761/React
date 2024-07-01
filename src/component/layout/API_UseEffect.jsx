import React, { useEffect, useState } from 'react'

function API_UseEffect() {
    const[resource,setResource] = useState('posts')
    const[data,setData] = useState([])

    useEffect(() =>{
        console.log("API Rendering")
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => setData(json))

        return () =>{
            console.log('This line of code will ecexute first whne the complier comes under useEffect hook.Clean data...to kill the event listner. ')
        }
    },[resource])
 
 
    return (
    <>
       <div>
        <button className='btn btn-info' onClick={() => setResource('posts')}>Posts</button>
        <button className='btn btn-info' onClick={() => setResource('comments')}>Comments</button>
        <button className='btn btn-info' onClick={() => setResource('users')}>Users</button>
        <br />
        {resource}
        {data.map(d => {
            return <pre >{JSON.stringify(d)}</pre>
        })}
       </div>

    </>
  )
}

export default API_UseEffect