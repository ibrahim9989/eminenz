import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className={`text-lg font-bold transition-colors duration-300 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>Eminenz</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-300 hover:-translate-y-1 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;