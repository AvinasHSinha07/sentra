import React from 'react';
import { ArrowRight, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20">
      
      {/* Main CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0f766e] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#14b8a6] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#0d9488] rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Connect with expert counselors today and take the first step toward your dream university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-800 px-8 py-3.5 rounded-full font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors">
                Explore Counselors
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-primary-600 mb-4 block">Sentra</a>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
              Connect with verified high school counselors for personalized guidance. Democratizing access to expert advice for everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">For Students</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Browse Services</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Student FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">For Counselors</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Become a Counselor</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2025 Sentra. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-slate-800">Privacy</a>
             <a href="#" className="hover:text-slate-800">Terms</a>
             <a href="#" className="hover:text-slate-800">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;