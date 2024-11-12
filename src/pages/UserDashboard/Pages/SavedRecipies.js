import React from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import SavedRecipies from '../../../components/UserDashboard/SavedRecipies'; // Adjust the path as needed

function MyRecipies() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:mt-0  overflow-y-auto ">
                <SavedRecipies/>
            </div>
        </div>
    );
}

export default MyRecipies;
