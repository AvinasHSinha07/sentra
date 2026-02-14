import React from 'react';
import { Search, ArrowUpRight, Star, Play, ShieldCheck, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-blue-400/10 rounded-full blur-[40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Span 7) */}
          <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">#1 Rated Counseling Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-8 font-sans">
              Unlock Your <br/>
              <span className="relative whitespace-nowrap text-primary-600">
                <svg className="absolute -bottom-2 md:-bottom-4 w-full h-3 md:h-4 text-yellow-300 fill-current -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
                </svg>
                <span className="relative">True Potential.</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Don't leave your future to chance. Connect with verified admissions officers and get the personalized roadmap to your dream university.
            </p>

            {/* Search Component */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl shadow-primary-900/5 border border-slate-100 flex flex-col sm:flex-row items-center gap-2 mb-12 max-w-xl mx-auto lg:mx-0 relative z-20 transform transition-transform hover:scale-[1.01]">
              <div className="flex-1 flex items-center px-4 w-full h-14 sm:h-auto border-b sm:border-0 border-slate-100">
                <Search className="text-slate-400 mr-3" size={22} />
                <input 
                  type="text" 
                  placeholder="Try 'Harvard essay review' or 'Career coaching'" 
                  className="w-full bg-transparent outline-none text-navy-900 placeholder-slate-400 font-medium text-base"
                />
              </div>
              <button className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group">
                Find Expert
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Social Proof Strip */}
            <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center gap-6 lg:gap-12 justify-center lg:justify-start grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +2k
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex gap-1 flex-col">
                 <div className="flex text-yellow-400">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-xs font-bold text-slate-500">Trusted by 10,000+ students</p>
              </div>
            </div>
          </div>

          {/* Right Image (Span 5) */}
          <div className="lg:col-span-5 relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-600 rounded-[3rem] rotate-6 opacity-5 scale-110"></div>
              <div className="absolute inset-0 bg-secondary-400 rounded-[3rem] -rotate-3 opacity-10 scale-105"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Student Success" 
                className="relative rounded-[3rem] shadow-2xl shadow-navy-900/20 border-8 border-white w-full object-cover h-[500px] z-10"
              />

              {/* Floating Card 1: Live Session */}
              <div className="absolute top-8 -left-8 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 animate-[bounce_3s_infinite] w-52 hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100" alt="Mentor" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900">Dr. Emily R.</p>
                    <p className="text-[10px] text-slate-500">Admissions Expert</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2.5 flex items-center gap-2.5">
                   <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                     <Play size={12} fill="currentColor" />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold text-navy-900 uppercase tracking-wide">Live Session</p>
                     <p className="text-[10px] text-slate-500">Essay Strategy Review</p>
                   </div>
                </div>
              </div>

              {/* Floating Card 2: Acceptance */}
              <div className="absolute bottom-12 -right-8 z-20 bg-navy-900 text-white p-5 rounded-2xl shadow-2xl animate-[bounce_4s_infinite] delay-700 max-w-[220px] hidden md:block border border-white/10">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="bg-green-500/20 p-2 rounded-full">
                     <ShieldCheck size={20} className="text-green-400" />
                   </div>
                   <span className="font-bold text-sm">Acceptance</span>
                 </div>
                 <p className="text-sm font-medium leading-relaxed mb-3 text-slate-200">"I got into my dream school! Thank you for the guidance."</p>
                 <div className="flex items-center gap-2">
                   <img className="w-6 h-6 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Student" />
                   <p className="text-xs text-slate-400">Michael T. - Stanford '28</p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;