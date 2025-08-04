'use client';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Compass, CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Router = useRouter();
  // const isHomePage = Router.pathname === "/";

    useEffect(() => {
    // if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Tour Packages', path: '/tour-packages/' },
    { name: 'Taxi Service', path: '/services' },
    { name: 'Adventure Sports', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/Blog' },
  ];
  const desktopNavLinks = [
    { name: 'Services', path: '/tour-packages/[slug]' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 md:top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
              ${scrolled ? 'backdrop-blur-md bg-white/30 w-[90%] md:w-[80%] rounded-2xl py-1 md:py-2 shadow-lg' : 'w-full rounded-none py-1 md:py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image src="/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
            /> */}
            <span className="text-2xl font-bold bg-clip-text bg-yellow-300 text-black px-4 py-2">
              JK Adventure
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-primary transition-colors duration-300 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}

          </div>

          <button className="hidden md:block" >
              <CircleUser size={30}/>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors "
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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