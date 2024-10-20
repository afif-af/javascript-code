import React, { useState } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = () => {
    if (item) { // Check if the item is not empty
      setList(prevList => [...prevList, item]); // Add the new item to the list
      setItem(''); // Clear the input after adding
    }
  };

  const remove = (index) => {
    alert(index); // Alert the index of the item being removed
    setList(prevList => prevList.filter((_, i) => i !== index)); // Remove item at the specified index
  };

  return (
    <div className="container">
      <table>
        <tbody>
          {list.length !== 0 ? ( // Correct conditional rendering syntax
            list.map((element, index) => (
              <tr key={index}> {/* Adding a unique key for each item */}
                <td>{element}</td>
                <td>
                  <button onClick={() => remove(index)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No items in the list</td> {/* Display when the list is empty */}
            </tr>
          )}
        </tbody>
      </table>
      <input
        type="text"
        value={item} // Controlled input to reflect current state
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button className="btn btn-primary" onClick={addToList}>Click me</button>
    </div>
  );
};

export default App;
