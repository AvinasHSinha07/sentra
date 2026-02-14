import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary-600 tracking-tight">Sentra</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Browse Services</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Counselors</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
              Sign In
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
           <a href="#" className="text-gray-600 font-medium py-2">Browse Services</a>
           <a href="#" className="text-gray-600 font-medium py-2">How it Works</a>
           <a href="#" className="text-gray-600 font-medium py-2">Sign In</a>
           <button className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium w-full">
              Get Started
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;