import React, { useState } from 'react';

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-gray-300">{label}</button>
      <div
        className={`absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg transition-all duration-200 ease-in-out z-10 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
