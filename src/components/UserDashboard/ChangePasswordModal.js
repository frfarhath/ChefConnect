import React, { useState } from 'react';
import { Button } from '@mui/material';

function ChangePasswordModal({ isOpen, onClose, onSave }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        onSave(oldPassword, newPassword);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h3 className="text-xl font-semibold text-[#cc133d] mb-4">Change Password</h3>
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old password"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                />
                <div className="flex justify-end mt-4">
                    <Button onClick={handleSave} variant="contained" className="bg-[#f6723e] text-white mr-2">
                        Save
                    </Button>
                    <Button onClick={onClose} variant="contained" className="bg-gray-400 text-white">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordModal;
