
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Fuel className="h-8 w-8 text-refuel-orange" />
              <span className="text-2xl font-bold">Refuel</span>
            </Link>
            <p className="text-gray-400 mb-4">
              On-demand fuel delivery service bringing premium quality fuel 
              directly to your location, anytime, anywhere.
            </p>
            <p className="text-sm text-gray-500">
              Drive on, we've got your back!
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Emergency Hotline</h4>
              <p className="text-refuel-orange">+91 98765 43210</p>
              <p className="text-sm text-gray-400">Available 24/7</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-refuel-orange">support@refuel.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Service Areas</h4>
              <p className="text-refuel-orange">Hyderabad Metro</p>
              <p className="text-sm text-gray-400">Expanding to more cities soon</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Refuel. All rights reserved. | A student-led startup revolutionizing fuel delivery.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Awards/Recognition */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-2">Recognized by:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-refuel-orange">
            <span>LevUP Ideathon Finalist</span>
            <span>•</span>
            <span>Naaripreneur @ IIM V</span>
            <span>•</span>
            <span>AWE Cohort</span>
            <span>•</span>
            <span>Student Innovation Award</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
