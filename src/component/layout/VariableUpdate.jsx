import React from 'react'

function VariableUpdate() {
    let data = 'React adv' ;
    function UpdateData(){
        alert(data)
    }
  return (
    <>
    <h1>{data}</h1>
    {/* dont use () sign to call function in ract */}
    <button onClick={UpdateData}>Click Me</button> fdf
    </>
     
  )
}

export default VariableUpdate