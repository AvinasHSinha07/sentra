import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'top-4' : 'top-0'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${
          isScrolled ? 'max-w-5xl px-0' : 'max-w-7xl px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`relative flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-slate-900/5 rounded-full py-3 px-6' 
              : 'bg-transparent py-6'
          }`}>
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold font-sans text-lg group-hover:bg-primary-600 transition-colors">
                  S.
                </div>
                <span className={`text-xl font-bold tracking-tight font-sans transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                  Sentra
                </span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Mentors', 'How it Works', 'Reviews'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-sm font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="text-slate-900 font-semibold text-sm hover:text-primary-600 px-4 py-2 transition-colors">
                Log In
              </button>
              <button className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-navy-900/10 flex items-center gap-2 group">
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-in slide-in-from-top-5 pt-24 px-6 pb-6 flex flex-col gap-6">
           <div className="flex flex-col space-y-2">
             {['Services', 'Mentors', 'How it Works', 'Reviews'].map((item) => (
               <a key={item} href="#" className="text-xl font-semibold text-slate-900 py-3 border-b border-slate-100">
                 {item}
               </a>
             ))}
           </div>
           <div className="mt-auto flex flex-col gap-3">
             <button className="w-full py-4 text-slate-900 font-bold border border-slate-200 rounded-xl">
               Log In
             </button>
             <button className="w-full py-4 bg-navy-900 text-white font-bold rounded-xl shadow-lg">
               Get Started
             </button>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;