import React from 'react';
import { Search, MessageSquare, BookOpen, Star } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Browse & Search",
    desc: "Explore services using categories, keywords, filters to find what you're looking for.",
    color: "bg-blue-600",
    iconColor: "text-white"
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Get in Touch",
    desc: "Reach out to your preferred counselors to discuss your study plans directly.",
    color: "bg-teal-500",
    iconColor: "text-white"
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Place Your Order",
    desc: "Choose a Gig package or request a custom offer before providing your requirements.",
    color: "bg-orange-500",
    iconColor: "text-white"
  },
  {
    id: 4,
    icon: Star,
    title: "Review & Approve",
    desc: "Receive the delivery and share your feedback with the community.",
    color: "bg-green-600",
    iconColor: "text-white"
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">4 Simple Steps to Your Success</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find a counselor you like with the experience you need. Here's how to get started:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className={`${step.color} rounded-2xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-xl`}>
              <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-6 backdrop-blur-sm">
                  {step.id}
                </div>
                
                <div className="mb-4">
                  <step.icon size={36} className="text-white opacity-90" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;