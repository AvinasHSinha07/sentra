import React from 'react';
import { Users, Heart, Target } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] flex items-center">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" 
              alt="University Campus" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-primary-900/90 to-primary-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 py-20 md:px-16 w-full max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 text-white">
               <Heart size={14} className="fill-white" />
               <span className="text-xs font-bold tracking-widest uppercase">Our Core Mission</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight font-sans leading-tight">
              Democratizing Access to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-200">World-Class Guidance</span>
            </h2>

            <div className="space-y-6 text-primary-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              <p>
                Every student deserves a champion. In schools across the globe, dedicated counselors wake up every morning with one mission: to help students discover their potential.
              </p>
              <p className="font-medium text-white">
                But geography shouldn't limit destiny.
              </p>
              <p>
                Sentra exists to break down those walls. We connect students with the wisdom they need, regardless of where they live or what school they attend.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <Users className="text-secondary-400" />
                <div>
                  <p className="text-2xl font-bold text-white">10k+</p>
                  <p className="text-xs text-primary-200">Students Helped</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <Target className="text-secondary-400" />
                <div>
                  <p className="text-2xl font-bold text-white">95%</p>
                  <p className="text-xs text-primary-200">College Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;