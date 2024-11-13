import React, { useState } from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import SharedRecipies from '../../../components/UserDashboard/SharedRecipies'; // Adjust the path as needed
import { FaEdit } from 'react-icons/fa'; // Make sure to use this consistently

function MyProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bio, setBio] = useState("Hi, I'm John Doe, a passionate chef who loves experimenting with new recipes and sharing them with others. I believe in making every dish an unforgettable experience. My goal is to inspire others to try new flavors and enjoy the beauty of cooking.");
    const [newBio, setNewBio] = useState(bio);
    const [image, setImage] = useState("https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");

    const handleBioChange = (event) => {
        setNewBio(event.target.value);
    };

    const handleSaveBio = () => {
        setBio(newBio);
        setIsModalOpen(false);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);  // Set the new image URL as the source
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />

            <div className="flex-1 p-4 md:mt-0 overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#cc133d]">My Profile</h2>
                
                {/* User Profile Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xl mx-auto">
                    {/* Profile Picture, UserName, and Bio in one row */}
                    <div className="flex items-center mb-4 space-x-6"> 
                        <div className="relative">
                            <img
                                className="w-24 h-24 rounded-full"
                                src={image}
                                alt="User Avatar"
                            />
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="absolute bottom-0 right-0 opacity-0 cursor-pointer"
                                accept="image/*"
                            />
                        </div>
                     
                        {/* Bio Section */}
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-[#cc133d]">Rahman Farhath</h3>
                            <p className="text-gray-700 mt-2">{bio}</p>
                        </div>
                    </div>

                    {/* Edit Bio Icon Button */}
                    <div className="mt-4 flex justify-start">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#f6723e] text-white p-2 rounded-full hover:bg-yellow-600 flex items-center justify-center"
                        >
                            <FaEdit className="text-lg" /> {/* Corrected to use FaEdit directly */}
                        </button>
                    </div>
                </div>
                
                <SharedRecipies />
            </div>

            {/* Modal for Editing Bio */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-xl font-semibold text-[#cc133d] mb-4">Edit Your Bio</h3>
                        <textarea
                            value={newBio}
                            onChange={handleBioChange}
                            className="w-full h-32 p-2 border border-gray-300 rounded-lg"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSaveBio}
                                className="bg-[#f6723e] text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyProfile;
