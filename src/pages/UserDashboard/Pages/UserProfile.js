import React, { useState } from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import UserRecipes from '../../../components/UserDashboard/UserRecipes'; // Adjust the path as needed
import { FaEdit } from 'react-icons/fa'; // Make sure to use this consistently

function UserProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bio, setBio] = useState("Hi, I'm John Doe, a passionate chef who loves experimenting with new recipes and sharing them with others. I believe in making every dish an unforgettable experience. My goal is to inspire others to try new flavors and enjoy the beauty of cooking.");
    const [newBio, setNewBio] = useState(bio);

    const handleBioChange = (event) => {
        setNewBio(event.target.value);
    };

    const handleSaveBio = () => {
        setBio(newBio);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />

            <div className="flex-1 p-4 md:mt-0  overflow-y-auto">
                {/* User Profile Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xl mx-auto">
                    {/* Profile Picture, UserName, and Bio in one row */}
                    <div className="flex items-center mb-4 space-x-6"> 
                        <div className="relative">
                            <img
                                className="w-24 h-24 rounded-full"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt="User Avatar"
                            />
                        </div>
                     
                        {/* Bio Section */}
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-[#cc133d]">Rahman Farhath</h3>
                            <p className="text-gray-700 mt-2">{bio}</p>
                        </div>
                    </div>

                </div>
                
                <UserRecipes />
            </div>

            )
        </div>
    );
}

export default UserProfile;
