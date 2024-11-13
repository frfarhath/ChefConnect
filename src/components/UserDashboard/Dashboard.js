import React, { useState } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faUser, faUserPlus, faUserMinus, faSearch } from '@fortawesome/free-solid-svg-icons';  
import FollowersModal from './FollowersModal';  
import FollowingModal from './FollowingModal';  
import FollowRequestsModal from './FollowRequestsModal';  
import RecipesList from './RecipesList';  

const Dashboard = () => {  
  const [showFollowersModal, setShowFollowersModal] = useState(false);  
  const [showFollowingModal, setShowFollowingModal] = useState(false);  
  const [showFollowRequestsModal, setShowFollowRequestsModal] = useState(false);  
  const [searchQuery, setSearchQuery] = useState('');  

  // Toggle modal functions  
  const toggleFollowersModal = () => setShowFollowersModal(prev => !prev);  
  const toggleFollowingModal = () => setShowFollowingModal(prev => !prev);  
  const toggleFollowRequestsModal = () => setShowFollowRequestsModal(prev => !prev);  

  // Handle the search query change  
  const handleSearchChange = (e) => {  
    setSearchQuery(e.target.value);  
  };  

  return (  
    <div className="flex flex-col h-screen p-8">  
      {/* Info Cards */}  
      <div className="flex justify-around mb-6 text-gray-700">  
        <InfoCard   
          icon={faUser}  
          title="Followers"  
          count={120}  
          onClick={toggleFollowersModal}  
          backgroundColor="#cc133d"  
        />  
        <InfoCard   
          icon={faUserPlus}  
          title="Following"  
          count={75}  
          onClick={toggleFollowingModal}  
          backgroundColor="#322946"  
        />  
        <InfoCard   
          icon={faUserMinus}  
          title="Requests"  
          count={5}  
          onClick={toggleFollowRequestsModal}  
          backgroundColor="#f6723e"  
        />  
      </div>  

      {/* Search Bar */}  
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />  

      {/* Modals */}  
      <FollowersModal show={showFollowersModal} toggle={toggleFollowersModal} />  
      <FollowingModal show={showFollowingModal} toggle={toggleFollowingModal} />  
      <FollowRequestsModal show={showFollowRequestsModal} toggle={toggleFollowRequestsModal} />  

      {/* Recipes List */}  
      <div className="mt-0">  
        <h3 className="text-xl font-semibold mb-0">Recipes Shared</h3>  
        <div className="flex justify-start bg-transparent">  
          <RecipesList searchQuery={searchQuery} />  
        </div>  
      </div>  
    </div>  
  );  
};  

// InfoCard component for modularity  
const InfoCard = ({ icon, title, count, onClick, backgroundColor }) => (  
  <div  
    className={`cursor-pointer flex flex-col items-center text-white py-3 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 space-y-2 md:space-y-0`}  
    style={{ backgroundColor }}  
    onClick={onClick}  
  >  
    <FontAwesomeIcon icon={icon} size="lg" />  
    <h3 className="text-lg font-bold">{title}</h3>  
    <p className="text-2xl font-semibold">{count}</p>  
  </div>  
);  

// SearchBar component for modularity  
const SearchBar = ({ searchQuery, onSearchChange }) => (  
  <div className="mb-6">  
    <div className="flex items-center bg-white p-2 rounded-lg shadow-md">  
      <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500" />  
      <input  
        type="text"  
        placeholder="Search..."  
        value={searchQuery}  
        onChange={onSearchChange}  
        className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"  
      />  
    </div>  
  </div>  
);  

export default Dashboard;