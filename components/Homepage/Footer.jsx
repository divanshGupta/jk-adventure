import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = [
  {title: "Tour Packages", path: '/tours'},
  {title: "Adventures", path: '/adventures'},
  {title: "Taxi Services", path: '/taxis'},
  {title: "Bike Rental",  path: '/bikes'},
  {title: "About Us", path: '/about'},
  {title: "Contact Us", path: '/contact'},
  {title: "Terms & Conditions", path: '/about'},
  {title: "Privacy Policy", path: '/policy'},
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#FFF9EE] text-[#4B5563] pt-6 pb-4 md:pb-6 md:pt-12 px-6 md:px-12">
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 md:mb-8">
        {/* Branding & Contact */}
        
        <div className="space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-primary">JK Adventures</h2>
          <p className="text-sm">Call us: +91 94191 44037</p>
          <p className="text-sm">Office: Bhadarva, Kashmir</p>
          <div className="flex space-x-4 mt-2">
            <Link href="#"><Facebook className="w-5 h-5 text-forest-green hover:text-misty-blue" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 text-forest-green hover:text-misty-blue" /></Link>
            <Link href="#"><Youtube className="w-5 h-5 text-forest-green hover:text-misty-blue" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 text-forest-green hover:text-misty-blue" /></Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {footerLinks.map((section) => (
            <Link href={section.path}
            key={section.title}
            className="hover:text-forest-green text-sm mb-2">{section.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center inset-0">
          <p className="text-[16px] md:text-[18px]">
            © {year} JK Adventure. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
