import React from 'react';
import './LeftSidebar.css'; // Custom CSS

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo">
        <img src="/path-to-your-logo.svg" alt="Logo" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
            <path d="M3 12l2-2m7-7l7 7m0 0l2 2m-2-2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8m9-9v9"></path>
          </svg>
          <span>Home</span>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5A8.38 8.38 0 0 1 4 11.5C4 6.08 9.14 2 14.5 2S25 6.08 25 11.5"></path>
          </svg>
          <span>Messages</span>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span>Notifications</span>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
            <path d="M23 7l-7 5 7 5V7z"></path>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <span>Video</span>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-music">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <span>Music</span>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10c0 3.3-1 6.3-4 10a15.3 15.3 0 0 1-4-10c0-3.3 1-6.3 4-10z"></path>
          </svg>
          <span>Hub</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
