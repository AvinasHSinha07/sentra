import React from 'react';
import { Users } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-6 py-20 md:px-20 md:py-24 text-center text-white">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm mb-8 border border-white/20">
            <Users size={32} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">The Mission Behind Sentra</h2>

          <div className="max-w-4xl mx-auto space-y-6 text-blue-50 text-lg md:text-xl font-light leading-relaxed">
            <p>
              In schools across the globe, dedicated counselors wake up every morning with one mission: to help students discover their potential and navigate the path to their dreams.
            </p>
            <p className="font-normal text-white">
              But their impact was limited by geography. Until now.
            </p>
            <p>
              Sentra exists to break down those walls. We've created a space where experienced school counselors can extend their reach, sharing their hard-earned wisdom with students who need it most—regardless of where they live.
            </p>
            <div className="pt-8">
              <span className="inline-block border-t border-white/30 pt-8 font-semibold tracking-wide uppercase text-sm">
                Democratizing access to world-class guidance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;