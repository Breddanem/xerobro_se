import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Navbar = () => {
  const navigate = useNavigate();
  const isVisible = useScrollDirection();

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  return (
    <nav className={`fixed w-full z-50 bg-transparent transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={handleLogoClick} 
            className="text-white text-xl font-bold hover:text-gray-300 transition-colors"
          >
            Xerobro
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
            <button 
              onClick={() => navigate('/deploy')}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;