
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Fuel } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Why Refuel', path: '/why-refuel' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Fuel className="h-8 w-8 text-refuel-burgundy" />
            <span className="text-2xl font-bold text-refuel-burgundy">REFUEL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-refuel-burgundy transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-refuel-burgundy font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/order">
              <Button className="bg-refuel-burgundy hover:bg-refuel-burgundy-light text-white">
                Order Fuel
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-refuel-burgundy focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-refuel-burgundy transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-refuel-burgundy font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/order" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 bg-refuel-burgundy hover:bg-refuel-burgundy-light text-white">
                  Order Fuel
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
