import React, { useState } from 'react';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import { Button, FormControl, Switch, Typography } from '@mui/material';
import ChangeUsernameModal from '../../../components/UserDashboard/ChangeUsernameModal'; // Adjust path as needed
import ChangePasswordModal from '../../../components/UserDashboard/ChangePasswordModal'; // Adjust path as needed

function SettingsPage() {
    const [isUsernameModalOpen, setIsUsernameModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false); // Initial state: Public

    const handleSaveUsername = (newUsername) => {
        console.log("Username changed to:", newUsername);
        // Add logic to update username
    };

    const handleSavePassword = (oldPassword, newPassword) => {
        console.log("Password changed from:", oldPassword, "to:", newPassword);
        // Add logic to update password
    };

    const handlePrivacyToggle = () => {
        setIsPrivate((prev) => !prev);
        console.log("Privacy mode changed to:", !isPrivate ? 'Private' : 'Public');
        // Add logic to save privacy mode change if needed
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:mt-0  overflow-y-auto">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#cc133d]">Settings</h3>

                {/* Change Privacy Section */}
                <div className="mb-8">
                    <Typography variant="h6" className="mb-4">Account Privacy</Typography>
                    <FormControl component="fieldset">
                        <div className="flex items-center mt-2">
                            <Typography variant="body1" className="mr-2">Public</Typography>
                            <Switch
                                checked={isPrivate}
                                onChange={handlePrivacyToggle}
                                color="primary"
                            />
                            <Typography variant="body1" className="ml-2">Private</Typography>
                        </div>
                    </FormControl>
                    <Typography variant="body2" className="mt-4 text-gray-600">
                        {isPrivate
                            ? "Only your followers will be able to see your posts in private mode."
                            : "Any user can see your posts in public mode."}
                    </Typography>
                </div>

                {/* Change Username Button */}
                <div className="mb-8">
                    <Button
                        onClick={() => setIsUsernameModalOpen(true)}
                        variant="contained"
                        className="w-200px bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white rounded py-2 hover:bg-[#3a3a3a] transition duration-200"
                        size="large">
                        Change Username
                    </Button>
                </div>

                {/* Change Password Button */}
                <div className="mb-8">
                    <Button
                        onClick={() => setIsPasswordModalOpen(true)}
                        variant="contained"
                        className="w-200px bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white rounded py-2 hover:bg-[#3a3a3a] transition duration-200"
                        size="large">
                        Change Password
                    </Button>
                </div>
            </div>

            {/* Modals */}
            <ChangeUsernameModal
                isOpen={isUsernameModalOpen}
                onClose={() => setIsUsernameModalOpen(false)}
                onSave={handleSaveUsername}
            />
            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                onSave={handleSavePassword}
            />
        </div>
    );
}

export default SettingsPage;
