import React from 'react';
import Signup from '../../../components/UserDashboard/Signup';

function SignupPage() {
    return (
        <div className="twoColumn flex h-screen">
            <div className="flex-1 p-4 bg-[#a585f] overflow-y-auto">
                <Signup />
            </div>
        </div>
    );
}

export default SignupPage;
