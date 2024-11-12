import React from 'react';
import Login from '../../../components/UserDashboard/Login';

function LoginPage() {
    return (
        <div className="twoColumn flex h-screen">
            <div className="flex-1 p-4 bg-[#a585f] overflow-y-auto">
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
