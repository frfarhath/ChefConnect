import React, { useState } from 'react';
import { Button } from '@mui/material';

function ChangeUsernameModal({ isOpen, onClose, onSave }) {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSave = () => {
        if (!username.trim()) {
            alert("Username cannot be empty!");
            return;
        }
        onSave(username);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-[1100]">
                <h3 className="text-xl font-semibold text-[#cc133d] mb-4">Change Username</h3>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter new username"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
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

export default ChangeUsernameModal;
