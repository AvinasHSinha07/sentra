import React from 'react';
import { Search, Globe, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Globe size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Connecting Students with Expert Counselors</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Expert Guidance From Those Who Guide <span className="text-primary-600 relative whitespace-nowrap">
            Students Every Day
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Experienced school counselors dedicate their lives to guiding students toward bright futures. 
          Sentra brings these trusted experts together to share their wisdom far beyond their school walls.
        </p>

        {/* Quote Card */}
        <div className="bg-white/60 backdrop-blur-sm border border-slate-200 p-6 rounded-2xl max-w-3xl mx-auto mb-12 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <p className="text-slate-500 italic font-medium">
            "Every counselor on our platform has years of real-world experience helping students navigate college applications, career decisions, and life-changing choices."
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center px-4 w-full h-12 md:h-auto">
              <Search className="text-slate-400 mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Search for counselors, services, or expertise..." 
                className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400"
              />
            </div>
            <button className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Search
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-slate-500 font-medium mr-2 self-center">Quick options:</span>
            {['IB Programs', 'UK Admissions', 'US Admissions', 'Scholarships', 'Career Planning'].map((tag) => (
              <button key={tag} className="bg-white border border-slate-200 hover:border-primary-300 hover:text-primary-600 text-slate-600 text-xs px-3 py-1.5 rounded-full transition-colors font-medium">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <button className="group inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Browse All Counselors 
            <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;