import React, { useState } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [formObj, setFormObj] = useState({ fName: "", lname: "", city: "", gender: "" });

  const inputOnChange = (property, value) => {
    setFormObj(prevObj => ({
      ...prevObj,
      [property]: value
    }));
  };

  const formSubmit=(e)=>{
    e.preDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj))
  }

  return (
    <div className="container">
      <form>
        <input 
          onChange={(e) => inputOnChange("fName", e.target.value)} 
          value={formObj.fName} 
          placeholder='First name' 
        /><br/>

        <input 
          onChange={(e) => inputOnChange("lname", e.target.value)} 
          value={formObj.lname} 
          placeholder='Last name' 
        /><br/>

        <select 
          onChange={(e) => inputOnChange("city", e.target.value)} 
          value={formObj.city} 
          name="" 
          id=""
        >
          <option value="">Choose</option>
          <option value="Dhaka">Dhaka</option>
          <option value="SHa">SHa</option>
        </select>
        <br />
        
        <label>
          <input 
            onChange={(e) => inputOnChange("gender", "Male")} 
            checked={formObj.gender === "Male"} 
            type='radio' 
            name="gender" 
          /> Male
        </label>
        
        <label>
          <input 
            onChange={(e) => inputOnChange("gender", "Female")} 
            checked={formObj.gender === "Female"} 
            type="radio" 
            name="gender" 
          /> Female
        </label>
        <br />
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
