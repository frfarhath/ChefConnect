import React from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import Dashboard from '../../../components/UserDashboard/Dashboard';

function UserDashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar on the side for larger screens, in a row on smaller screens */}
      <Sidebar />
      
      {/* Main content area, stacked below sidebar on smaller screens */}
      <div className="flex-1 md:mt-0  overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default UserDashboard;
