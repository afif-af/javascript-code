import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Notfound from './pages/Notfound';

const App = () => {
  

  return (
    <div>
     <BrowserRouter>

     <Routes>
      
      <Route path="/" element={<Homepage/>} />  
      <Route path="/notfound/:id/:name" element={<Notfound/>} /> 



     </Routes>
     
     </BrowserRouter>

    </div>
  );
};

export default App;
