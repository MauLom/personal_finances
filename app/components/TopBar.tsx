'use client';
import React from "react";

type TopBarProps = {
  toggleSidebar: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 sm:hidden"
      >
        ☰
      </button>

      {/* Title */}
      <h1 className="text-xl font-bold">Hello, User!</h1>

      {/* Search and User Avatar */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search here"
          className="p-2 border rounded"
        />
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default TopBar;
