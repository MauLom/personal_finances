'use client';

import React from "react";

type ModalProps = {
  isVisible: boolean;
  onAccept: () => void;
  onCancel: () => void;
};

const Modal: React.FC<ModalProps> = ({ isVisible, onAccept, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Load Dummy Data?</h3>
        <p className="mb-6 text-gray-600">
          We noticed your storage is empty. Do you want to load some dummy accounts and transactions for testing?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Load Dummy Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
