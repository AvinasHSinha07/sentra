import React from 'react';
import { ArrowRight, Twitter, Linkedin, Facebook, Instagram, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block text-3xl font-bold tracking-tight font-sans text-white">
              Sentra<span className="text-primary-400">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Democratizing access to elite educational guidance. We connect ambitious students with verified counselors from top institutions worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:border-primary-500 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Column 1 (Span 2) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Browse Counselors', 'How It Works', 'Pricing', 'Success Stories', 'Reviews'].map((item) => (
                <li key={item}><a href="#" className="hover:text-primary-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Careers', 'Blog', 'Contact Support', 'Become a Counselor'].map((item) => (
                <li key={item}><a href="#" className="hover:text-primary-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (Span 4) */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <h4 className="font-bold text-white mb-2">Stay Ahead of the Curve</h4>
            <p className="text-slate-400 text-sm mb-6">Get weekly admissions tips and scholarship alerts delivered to your inbox.</p>
            
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-navy-950/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary-900/50 flex items-center justify-center gap-2 group">
                Subscribe for Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">&copy; 2025 Sentra Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6 text-xs text-slate-400">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>for students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;