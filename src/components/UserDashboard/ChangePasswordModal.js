import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function ChangePasswordModal({ isOpen, onClose, onSave }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please fill out all fields!");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        onSave(oldPassword, newPassword);
        onClose();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSave();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-[1100]">
    
                <h3 className="text-xl font-semibold text-[#cc133d] mb-4">Change Password</h3>

                <TextField
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old password"
                    fullWidth
                    className="mb-4"
                    variant="outlined"
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                    fullWidth
                    className="mb-4"
                    variant="outlined"
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    fullWidth
                    className="mb-4"
                    variant="outlined"
                    onKeyPress={handleKeyPress}
                />

                <div className="flex justify-end mt-4">
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        sx={{ backgroundColor: '#f6723e', color: 'white', marginRight: '8px' }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="contained"
                        sx={{ backgroundColor: '#808080', color: 'white' }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordModal;
