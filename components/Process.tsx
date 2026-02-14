import React from 'react';
import { Search, MessageSquare, Calendar, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Browse Experts",
    desc: "Filter 500+ mentors by university, major, or budget.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "02",
    icon: MessageSquare,
    title: "Chat for Free",
    desc: "Send a message to discuss your goals before booking.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "03",
    icon: Calendar,
    title: "Book Session",
    desc: "Secure your 1-on-1 video call or essay review slot.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Get Results",
    desc: "Receive personalized feedback and submit with confidence.",
    color: "bg-green-100 text-green-600",
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-sans">
            How Sentra Works
          </h2>
          <p className="text-lg text-slate-500">
            Simple, transparent, and built for your success. Start your journey in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              
              {/* Icon Container */}
              <div className="flex justify-center mb-8">
                <div className={`w-24 h-24 rounded-[2rem] ${step.color} flex items-center justify-center text-3xl shadow-lg shadow-slate-100 border-4 border-white relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <step.icon size={36} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Arrow */}
              <div className="lg:hidden flex justify-center mt-8 text-slate-300">
                {index !== steps.length - 1 && <ArrowRight className="rotate-90" />}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2">
            View All Counselors
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Process;