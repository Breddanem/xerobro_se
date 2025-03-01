import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <a 
              href="mailto:info@xerobro.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              info@xerobro.com
            </a>
            <div className="flex items-center text-gray-400">
              <MapPin size={16} className="mr-2" />
              Based in Sweden
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/xerobroai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Xerobro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;