import { useRef, useState } from "react";


const App =()=>{

  let [FormObj,setFormObj]=useState({
    fname:"",
    lname:"",
    city:"",
    gender:""
  });
  
  const InputOnChange=(property,value)=>{
    setFormObj(preObj=>({
      ...preObj,
      [property]:value

    }));


  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("from submitted",FormObj);
    alert(JSON.stringify(FormObj))
  };

  return(
    <div className="container ">
      <form onSubmit={handleSubmit}>

         
        <input onChange={(e)=>{InputOnChange("fname",e.target.value)}} value={FormObj.fname} type="text" name="" id="" placeholder="FirstName" /> <br></br>

        <input onChange={(e)=>{InputOnChange("lname",e.target.value)}} value={FormObj.lname} placeholder="LastName"/><br>
        </br>

        <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
          <option>Chose city</option>
          <option value="dhaka">Dhaka</option>
          <option value="mymensingh"> mymen</option>
        </select>
        <br></br>

        <input onChange={(e)=>{InputOnChange("gender",'Male')}} checked={FormObj.gender==="Male"} type="radio" name ="gender"/>Male

        <input onChange={(e)=>{InputOnChange("gender",'Female')}} checked={FormObj.gender=="Female"} type="radio" name="gender" />Female<br>
        </br>


        <button  type="submit"> Submit</button>
      </form>         

    </div>
  )
}

export default App;