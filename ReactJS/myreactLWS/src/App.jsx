import { useEffect, useRef, useState } from "react";


const App =()=>{

  let [Data,setData]=useState();
   
  useEffect(()=>{



    (async()=>{

     let res = await fetch('https://dummyjson.com/products/')

     let json=await res.json()
     setData(json)
       
    })()

  
  },[])
  
  return(

    <div>
      
         {JSON.stringify(Data)}
    </div>
  )
}

export default App;