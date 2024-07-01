import React, { useEffect, useState } from 'react'

function EventLister() {
    const[screenWidth,setScreenWidth] = useState(window.innerWidth)

    const screenResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() =>{
        console.log("screen size")
        window.addEventListener('resize',screenResize)
        //comes under reutrn block during re-rendering and when the component is un-mount but  not on the inetial render 
        return () => {
            console.log('This line of code will execute first when the complier comes under useEffect hook.Clean items....use to kill the previour event listen so the listen does not add on')
            window.removeEventListener('resize',screenResize)
        }
    },[])

  return (
    <>
      {screenWidth}
    </>
  )
}

export default EventLister