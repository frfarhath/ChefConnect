import React from 'react';  
import { Link } from 'react-router-dom'; 
import logo3 from '../../assests/logo3.jpeg';  

const Signup = () => {  
  return (  
    <div className="flex items-center justify-center min-h-screen" style={{   
      background: '-webkit-linear-gradient(140deg, #cc133d, #f6723e, #322946)',   
      background: 'linear-gradient(140deg, #cc133d, #691a36, #322946)',   
    }}>  
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <img src={logo3} alt="Platform Logo" className="mb-4 mx-auto w-20 h-auto" />    
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>  
        <form>  
          <div className="mb-4">  
            <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name:</label>  
            <input   
              type="text"  
              id="fullName"   
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#322946] border-[#e2e2e2]"  
              placeholder="Enter your full name"  
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>  
            <input   
              type="email"   
              id="email"   
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#322946] border-[#e2e2e2]"  
              placeholder="Enter your email"  
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>  
            <input   
              type="password"   
              id="password"   
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#322946] border-[#e2e2e2]"  
              placeholder="Create a password"  
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password:</label>  
            <input   
              type="password"   
              id="confirmPassword"   
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#322946] border-[#e2e2e2]"  
              placeholder="Confirm your password"  
            />  
          </div>  
          <button className="w-full bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white rounded py-2 hover:bg-[#3a3a3a] transition duration-200">  
            Sign Up  
          </button>  
          <Link to="/login" className="block text-center text-gray-700 mt-4">Already have an account? Log in</Link>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default Signup;