import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
    </div>
  );
};

export default ModalHeader;
