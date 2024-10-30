import { useRef, useState } from "react";


const App =()=>{
  
  let [FormObj,setFormObj]=useState({
    fname:"",
    lname:"",
    city:"dhaka",
    gender:"Female"
  })
  
  return(
    <div className="container ">
      <form action="#">

         
        <input  value={FormObj.fname} type="text" name="" id="" placeholder="FirstName" /> <br></br>

        <input value={FormObj.lname} placeholder="LastName"/><br>
        </br>

        <select value={FormObj.city}>
          <option>Chose city</option>
          <option value="dhaka">Dhaka</option>
          <option value="mymensingh"> mymen</option>
        </select>
        <br></br>

        <input checked={FormObj.gender==="Male"} type="radio" name ="gender"/>Male
        <input checked={FormObj.gender=="Female"} type="radio" name="gender" />Female<br>
        </br>


        <button type="submit"> Submit</button>
      </form>         

    </div>
  )
}

export default App;