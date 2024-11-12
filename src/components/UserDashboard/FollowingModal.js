import React from 'react';
import ModalHeader from './ModalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const FollowingModal = ({ show, toggle }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-3/4 md:w-1/4 rounded-lg p-4 max-h-[500px] overflow-y-auto">
        <ModalHeader title="Following" onClose={toggle} />
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Following..."
            className="w-full p-2 rounded-lg border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        
        {/* Scrollable content */}
        <div className="max-h-[300px] overflow-y-scroll">
          {['UserA', 'UserB', 'UserC', 'UserD', 'UserE', 'UserF', 'UserG', 'UserH', 'UserI'].map((user, index) => (
            <div key={index} className="flex justify-between items-center mb-3 border-b pb-2 hover:bg-gray-100 p-2 rounded-lg">
              <Link to={`/userprofile`} className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {user}
              </Link>
              <div className="flex space-x-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                  <FontAwesomeIcon icon={faUserMinus} className="mr-1" />
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  <FontAwesomeIcon icon={faUserPlus} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingModal;