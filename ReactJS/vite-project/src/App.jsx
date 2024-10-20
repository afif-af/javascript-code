import React, { useRef } from 'react';
import Hero from './components/Hero';

const App = () => {
  let APIData = useRef( null);
  let myp=useRef();

 const fetchData=async()=>{

      const response=await fetch("https://dummyjson.com/products")
      APIData.current=await response.json();
 }
 const showData=()=>{
   myp.current.innerText=JSON.stringify(APIData.current)
 }
  return (
    <div className="container">
     
      <p ref={myp}></p>
     
      <button className="btn btn-primary" onClick={fetchData}>Call Api</button>
     < button className="btn btn-primary" onClick={showData}>Show Api</button>
    </div>
  );
};

export default App;
