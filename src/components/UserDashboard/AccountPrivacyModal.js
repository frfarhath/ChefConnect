// File: ../../../components/UserDashboard/AccountPrivacyModal.js
import React, { useState } from 'react'; // Added useState import
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControlLabel, Switch } from '@mui/material';

function AccountPrivacyModal({ isOpen, onClose, onSave, isPrivate }) {
    const [privacyMode, setPrivacyMode] = useState(isPrivate);

    const handleTogglePrivacy = () => {
        setPrivacyMode((prev) => !prev);
    };

    const handleSave = () => {
        onSave(privacyMode);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Account Privacy Mode</DialogTitle>
            <DialogContent>
                <FormControlLabel
                    control={
                        <Switch
                            checked={privacyMode}
                            onChange={handleTogglePrivacy}
                            color="primary"
                        />
                    }
                    label={privacyMode ? 'Private Mode' : 'Public Mode'}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AccountPrivacyModal;
