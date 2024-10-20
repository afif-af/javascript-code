import React from 'react';
import './TopNavbar.css'; // Custom CSS

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <h1 className="logo">MySite</h1>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <div className="navbar-right">
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
            <path d="M20.83 18.36A10 10 0 0 0 12 2a10 10 0 0 0-8.83 16.36"></path>
            <path d="M15.71 17.29A7.93 7.93 0 0 0 12 18a7.93 7.93 0 0 0-3.71-.71"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
