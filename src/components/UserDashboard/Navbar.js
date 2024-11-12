import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assests/logo3.jpeg'; // Adjust the path as needed
import { TypeAnimation } from 'react-type-animation';

function Navbar() {
  return (
    <nav className="bg-white p-3 flex justify-between items-center shadow-md m-0">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mb-0 mt-0 w-auto mr-2" />
        <div className="text-2xl font-bold text-brown-700">
          <TypeAnimation
            sequence={[
              'Welcome to ChefConnect!', 1000,
              'Discover Your Favorite Recipes', 1000,
              'Share, Discover, Savor — Recipes That Connect.', 0 // Stops after this
            ]}
            speed={50}
            repeat={0} // Ensures the animation runs only once
            cursor={false} // Hides the cursor after typing
          />
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="http://localhost:3000/login" className="flex items-center space-x-2">
            <FaSignOutAlt />
            <span>LogOut</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
