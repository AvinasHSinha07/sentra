import React from 'react';
import { FileText, Check, ArrowRight, Sparkles, Clock, DollarSign, User } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-secondary-100 border border-secondary-200 rounded-full px-4 py-1.5 mb-8">
              <Sparkles size={14} className="text-secondary-700 fill-secondary-700" />
              <span className="text-xs font-bold text-secondary-800 uppercase tracking-wide">Smart Matching Feature</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-[1.2] font-sans">
              Post a Request. <br/>
              <span className="text-slate-400">Sit Back. </span>
              <span className="text-primary-600">Get Offers.</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Short on time? Don't browse. Just describe what you need—whether it's UCAS help, essay editing, or mock interviews—and let qualified counselors compete for your success.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { title: "Describe Your Needs", desc: "Set your budget, deadline, and goals." },
                { title: "Receive Custom Proposals", desc: "Review offers from verified experts within hours." },
                { title: "Choose the Best Fit", desc: "Compare profiles, prices, and reviews instantly." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-bold text-base">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-navy-900/20 hover:shadow-navy-900/30 flex items-center gap-2 group transform hover:-translate-y-0.5">
              Post a Request for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content - Floating UI Composition */}
          <div className="order-1 lg:order-2 relative perspective-1000">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative">
              
              {/* Central Brief Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 max-w-sm mx-auto relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50">
                   <div className="flex items-center gap-3">
                     <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600">
                       <FileText size={20} />
                     </div>
                     <div>
                       <h3 className="font-bold text-navy-900 text-sm">Review my Personal Statement</h3>
                       <p className="text-xs text-slate-400">Posted 2m ago</p>
                     </div>
                   </div>
                   <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-lg text-xs font-bold">Open</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                    <Clock size={16} className="text-slate-400" />
                    <span>Deadline: <strong>3 Days</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                    <DollarSign size={16} className="text-slate-400" />
                    <span>Budget: <strong>$100 - $150</strong></span>
                  </div>
                </div>

                <div className="flex -space-x-3 items-center pt-2">
                   <span className="text-xs font-bold text-slate-400 mr-3">3 Offers:</span>
                   <img className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100" alt="" />
                   <img className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="" />
                   <img className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100" alt="" />
                </div>
              </div>

              {/* Floating Offer Card 1 */}
              <div className="absolute -right-4 top-12 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-64 animate-[bounce_4s_infinite] z-20">
                <div className="flex items-start justify-between mb-2">
                   <div className="flex items-center gap-2">
                      <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100" alt="" />
                      <div>
                        <p className="font-bold text-xs text-navy-900">Sarah J.</p>
                        <p className="text-[10px] text-slate-500">Harvard Alumni</p>
                      </div>
                   </div>
                   <span className="text-green-600 font-bold text-sm">$120</span>
                </div>
                <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">"I can help refine your intro hook! Available today."</p>
              </div>

              {/* Floating Offer Card 2 */}
              <div className="absolute -left-8 bottom-20 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-64 animate-[bounce_5s_infinite] delay-700 z-20">
                <div className="flex items-start justify-between mb-2">
                   <div className="flex items-center gap-2">
                      <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="" />
                      <div>
                        <p className="font-bold text-xs text-navy-900">David C.</p>
                        <p className="text-[10px] text-slate-500">Career Coach</p>
                      </div>
                   </div>
                   <span className="text-green-600 font-bold text-sm">$95</span>
                </div>
                <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">"Professional review with inline comments."</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;