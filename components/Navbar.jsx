'use client';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Router = useRouter();
  const isHomePage = Router.pathname === "/";

    useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/tours' },
    { name: 'Taxi Service', path: '/taxi' },
    { name: 'Adventure Sports', path: '/adventure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${
      isHomePage
        ? scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
          : "bg-white shadow-md"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image src="/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
            /> */}
            <span className="text-2xl font-bold bg-clip-text">
              The Nomad Indian
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-hero">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/40 rounded-lg shadow-medium mt-2">
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
                  Book Now
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