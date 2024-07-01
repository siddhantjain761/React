import React, { useState, useEffect } from "react";

function ChildAPIcomponent(props) {
  console.log(props.url);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // useEffect(() =>{
  //   setIsLoading(true)
  //   setIsError(false)
  //   let unSubscribe = false;

  //     fetch(`https://jsonplaceholder.typicode.com/${props.url}`)
  //     .then(response => response.json())
  //     .then((json) => setData(json) 
  //     })
  //     .catch(() => setIsError(true))
  //     .finally(() => setIsLoading(false))

  //     return() =>{
  //       console.log("Cancling request");
  //       unSubscribe = true;
  //     }
  // },[props.url])
  //console.log({data})

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    //if the user frequently changes the type of api  , 
    //then the previously called api request should be aborted  , 
    //which can be achieved by AbortController and signal
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/${props.url}`, { signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err),setIsError(true))
      .finally(() => setIsLoading(false),setIsError(false))

    return () => {
      console.log("Cancling request");
      controller.abort();
       
    };
  }, [props.url]);

  return isLoading ? (<h1>Loading..</h1>) : isError ? (<h1>Error</h1>) : <pre>{JSON.stringify(data,null,2)}</pre>
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default ChildAPIcomponent;
