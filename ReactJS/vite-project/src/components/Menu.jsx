import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/notfound/rabbil/hasan">Not Found</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
