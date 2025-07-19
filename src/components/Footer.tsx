
import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Why Refuel', path: '/why-refuel' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: 'Emergency Delivery', path: '/services' },
      { name: 'Scheduled Delivery', path: '/services' },
      { name: 'Subscription Plans', path: '/services' },
      { name: 'Order Now', path: '/order' }
    ],
    support: [
      { name: 'FAQs', path: '/faqs' },
      { name: 'Customer Support', path: '/contact' },
      { name: 'Safety Guidelines', path: '/faqs' },
      { name: 'Terms of Service', path: '#' }
    ]
  };

  return (
    <footer className="bg-refuel-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 mb-4 hover-scale transition-all duration-300">
              <Fuel className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">Refuel</span>
            </Link>
            <p className="text-gray-200 mb-4">
              On-demand fuel delivery service bringing premium quality fuel 
              directly to your location, anytime, anywhere in Visakhapatnam.
            </p>
            <p className="text-sm text-gray-300">
              Drive on, we've got your back!
            </p>
          </div>

          {/* Company Links */}
          <div className="animate-slide-in-right" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-200 hover:text-white transition-colors duration-200 story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-200 hover:text-white transition-colors duration-200 story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="animate-slide-in-right" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-200 hover:text-white transition-colors duration-200 story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 mt-8 pt-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="hover-scale transition-all duration-300">
              <h4 className="font-semibold mb-2">Emergency Hotline</h4>
              <p className="text-white">0000-REFUEL-1</p>
              <p className="text-sm text-gray-200">Available 24/7</p>
            </div>
            <div className="hover-scale transition-all duration-300">
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-white">support@refuel.com</p>
              <p className="text-sm text-gray-200">Response within 24 hours</p>
            </div>
            <div className="hover-scale transition-all duration-300">
              <h4 className="font-semibold mb-2">Service Areas</h4>
              <p className="text-white">Visakhapatnam</p>
              <p className="text-sm text-gray-200">Expanding to all Tier 2 cities soon</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <div className="text-sm text-gray-200">
            © 2024 Refuel. All rights reserved. | A student-led startup revolutionizing fuel delivery.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-200 hover:text-white transition-colors duration-200 story-link">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-200 hover:text-white transition-colors duration-200 story-link">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-200 hover:text-white transition-colors duration-200 story-link">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Awards/Recognition */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center animate-fade-in">
          <p className="text-sm text-gray-200 mb-2">Recognized by:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
            <span className="hover-scale transition-all duration-300">Finalist LevUP Ideathon</span>
            <span>•</span>
            <span className="hover-scale transition-all duration-300">Featured at IWN AP</span>
            <span>•</span>
            <span className="hover-scale transition-all duration-300">State Top 40 for AWE</span>
            <span>•</span>
            <span className="hover-scale transition-all duration-300">Meetup with Unstoppable Women</span>
          </div>
          <p className="text-sm text-gray-200 mt-4">We are expanding soon to Tier 2 cities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
