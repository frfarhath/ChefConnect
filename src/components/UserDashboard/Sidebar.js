import React, { useEffect, useState } from 'react';
import { FaPlus, FaBookmark, FaCog, FaHome, FaUser } from 'react-icons/fa';
import '../../pages/UserDashboard/Styles/UserDashboard.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname.split('/')[1];
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <aside className="sidebar bg-gradient-to-r from-[#691a36] to-[#cc133d] text-white p-4 flex md:flex-col items-center md:items-center space-y-0 md:space-y-2 md:w-[250px] h-full md:h-screen">
  <div className="flex flex-col items-center justify-center w-full space-y-4 mb-6">
    <div className="relative flex justify-center">
      <img
        className="w-24 h-24 rounded-full shadow-lg mb-0"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="User Avatar"
      />
    </div>
    <h4 className="text-lg font-semibold text-center mb-0">Rahman Farhath</h4>
  </div>

  <div className="flex ml:flex-row md:flex-col space-y-4 md:space-y-3 justify-center md:justify-start w-full">
    <a
      href="http://localhost:3000/userdashboard"
      className={`sidebar-link p-3 flex items-center rounded transition ${
        activeLink === 'userdashboard' ? 'bg-[#f6723e] border-2 border-[#f6723e]' : 'hover:bg-red-500'
      }`}
      onClick={() => handleLinkClick('userdashboard')}
    >
      <FaHome className="mr-2 md:mr-0" />
      <span className="hidden md:inline">Home</span>
    </a>
    <a
      href="http://localhost:3000/myprofile"
      className={`sidebar-link p-3 flex items-center rounded transition ${
        activeLink === 'myprofile' ? 'bg-[#f6723e] border-2 border-[#f6723e]' : 'hover:bg-red-500'
      }`}
      onClick={() => handleLinkClick('myprofile')}
    >
      <FaUser className="mr-2 md:mr-0" />
      <span className="hidden md:inline">My Profile</span>
    </a>
    <a
      href="http://localhost:3000/addrecipe"
      className={`sidebar-link p-3 flex items-center rounded transition ${
        activeLink === 'addrecipe' ? 'bg-[#f6723e] border-2 border-[#f6723e]' : 'hover:bg-red-500'
      }`}
      onClick={() => handleLinkClick('addrecipe')}
    >
      <FaPlus className="mr-2 md:mr-0" />
      <span className="hidden md:inline">Add Recipe</span>
    </a>
    <a
      href="http://localhost:3000/savedrecipies"
      className={`sidebar-link p-3 flex items-center rounded transition ${
        activeLink === 'savedrecipies' ? 'bg-[#f6723e] border-2 border-[#f6723e]' : 'hover:bg-red-500'
      }`}
      onClick={() => handleLinkClick('savedrecipies')}
    >
      <FaBookmark className="mr-2 md:mr-0" />
      <span className="hidden md:inline">Saved Recipes</span>
    </a>
    <a
      href="http://localhost:3000/settings"
      className={`sidebar-link p-3 flex items-center rounded transition ${
        activeLink === 'settings' ? 'bg-[#f6723e] border-2 border-[#f6723e]' : 'hover:bg-red-500'
      }`}
      onClick={() => handleLinkClick('settings')}
    >
      <FaCog className="mr-2 md:mr-0" />
      <span className="hidden md:inline">Settings</span>
    </a>
  </div>
</aside>


  );
};

export default Sidebar;
