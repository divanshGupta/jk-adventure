import { useState, useEffect, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import useUserProfile from '@/hooks/useUserProfile';
import Link from 'next/link';

const ProfileDropdown = ( { logoutFunction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const { user, isAdmin, isLoggedIn } = useUserProfile();

  useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const firstLetter = user?.name.charAt(0).toUpperCase() || "";
    const fullName = user?.name.trim() || "";
const surnameInitial = fullName.split(" ")[1]?.charAt(0).toUpperCase() || "";



  return (
    <div ref={menuRef} className="relative flex items-center gap-4">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {firstLetter ? 
        <div className="w-7 h-7 rounded-full bg-transparent border-2 border-black text-black text-2xl lg:text-[20px] flex items-center justify-center">
          {firstLetter + surnameInitial}
        </div>
        : 
        <CgProfile size={42}/>
        }
      </div>

      {isOpen && (
        <ul className="absolute right-0 top-12 w-48 lg:w-36 bg-white border border-gray-200 rounded-lg shadow-md text-sm font-medium overflow-hidden z-50">
          {isLoggedIn && 
            <li>
              <Link
                href="/profile/"
                className="block px-4 py-3 lg:py-[8px] hover:bg-gray-50 transition-colors"
              >
                Profile
              </Link>
            </li>
          }
          
          <li>
            {isLoggedIn 
            ? 
            <button
              onClick={logoutFunction}
              className="px-4 py-3 lg:py-[8px] text-red-600 hover:bg-red-50 transition-colors"
            >
              Log Out
            </button>
            : 
            <Link
              href="/auth/login"
              className="block px-4 py-3 lg:py-[8px] text-green-600 hover:bg-red-50 transition-colors"
            >
              Log In
            </Link>}
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;