'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { CircleUser, ChevronDown, ChevronUp} from 'lucide-react';
import ProfileDropdown from '../ui/profile-dropdown';
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/tours/' },
    { name: 'Taxi Service', path: '/taxis' },
    { name: 'Adventure Sports', path: '/adventures' },
    { name: 'Bike Rental', path: '/bikes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const desktopNavLinks = [
  {
    name: 'Services',
    submenu: [
      { name: 'Tour Packages', path: '/tours' },
      { name: 'Taxi Service', path: '/taxis' },
      { name: 'Adventure Sports', path: '/adventures' },
      { name: 'Bike Rental', path: '/bikes' },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
      await supabase.auth.signOut();
      router.push("/auth/login");
    };

  return (
    <nav className={`fixed top-0 left-0 transform z-50 transition-all duration-300
              ${scrolled ? 'bg-slate-50 w-full md:px-12 shadow-lg' : 'w-full rounded-none'}`}>
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image src="/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
            /> */}
            <span className="text-lg md:text-xl italic font-semibold bg-clip-text bg-yellow-300 text-black">
              JK Adventure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {desktopNavLinks.map((link) => (
              link.submenu ? (
                <div key={link.name} className="relative group">
                  <button className="hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group">
                    <span>{link.name}</span>
                    <span className="relative w-4 h-4 flex items-center justify-center">
                      <ChevronDown className="absolute transition-opacity duration-200 group-hover:opacity-0" />
                      <ChevronUp className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                  </button>

                  <div className="absolute left-0 mt-2 w-48 lg:w-36 bg-white border border-gray-200 shadow-lg rounded-md text-sm lg:text-[14px] overflow-hidden font-medium z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.path}
                        className="block px-4 py-3 lg:py-[8px] hover:bg-gray-50 transition-colors hover:rounded-md"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              )
            ))}

          </div>

          <button className="hidden md:block" >
              <ProfileDropdown logoutFunction={handleLogout} />
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-4 items-center justify-center">
            <Link
              href={'/profile'}
              className="text-foreground hover:text-primary transition-colors"
            >
              <CircleUser className='w-5 h-5'/>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-medium mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="btn-hero w-full">
                    Contact Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;