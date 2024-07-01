import React, { useState } from 'react'

function HiddenAndToggle() {
    const[flag,setflag]  = useState(true)
  return (
    <>
    {
        flag ? <h1>Welcome to react basics</h1> : null
    }
     
    <button className='btn btn-info' onClick={()=>setflag(true)} >Show</button><br /><br />
    <button className='btn btn-info' onClick={()=>setflag(false)} >Hide</button><br /><br />
    <button className='btn btn-info' onClick={()=>setflag(!flag)} >Toggle</button><br /><br />
    </>
  )
}

export default HiddenAndToggle