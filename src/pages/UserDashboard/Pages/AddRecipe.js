import React from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import AddRecipes from '../../../components/UserDashboard/AddRecipe'; // Adjust the path as needed

function AddRecipe() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:mt-0  overflow-y-auto">
        <AddRecipes />
      </div>
    </div>
  );
}

export default AddRecipe;
