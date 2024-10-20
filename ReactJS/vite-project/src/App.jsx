import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [data, setData] = useState({}); // Changed initial state to an object

  useEffect(() => {
    fetch('https://dummyjson.com/products/1') // Corrected fetch call
      .then(res => res.json())
      .then(json => setData(json)) // Set the fetched data to the state
      .catch(err => console.error("Error fetching data:", err)); // Added error handling
  }, []);

  return (
    <div>
      {JSON.stringify(data)} {/* Displaying the fetched data */}
    </div>
  );
};

export default App;
