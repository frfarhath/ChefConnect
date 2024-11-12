import React from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar'; 
import ViewRecipe from '../../../components/UserDashboard/ViewRecipie';  // Make sure the path is correct

function RecipiePage() {  // Ensure the function is renamed
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:mt-0  overflow-y-auto ">
                <ViewRecipe/>  {/* This should not conflict */}
            </div>
        </div>
    );
}

export default RecipiePage;
