import React from 'react';
import { FileText, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-secondary-100 rounded-full px-3 py-1 mb-6">
              <Sparkles size={14} className="text-secondary-600" />
              <span className="text-xs font-semibold text-secondary-700 uppercase">New Feature for Students</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Post a Brief, Get <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-600">Multiple Offers</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Describe what you need help with, and receive custom proposals from multiple expert counselors. Compare offers, pricing, and timelines to choose the perfect match.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: FileText,
                  title: "Post Your Requirements",
                  desc: "Share what you need – application help, essay review, interview prep."
                },
                {
                  icon: Users,
                  title: "Receive Custom Offers",
                  desc: "Qualified counselors submit personalized proposals with pricing."
                },
                {
                  icon: CheckCircle,
                  title: "Choose Your Counselor",
                  desc: "Review proposals, compare options, and hire the best fit."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-secondary-500">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/40 flex items-center gap-2 group">
              Post Your Brief Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-[3rem] transform rotate-3 scale-95 opacity-70"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform transition-transform hover:-translate-y-2 duration-500 border border-slate-100">
              <div className="flex items-start mb-6 pb-6 border-b border-slate-100">
                <div className="bg-secondary-50 p-3 rounded-xl mr-4">
                  <FileText className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Student Brief</h3>
                  <p className="text-xs text-slate-400">Posted 2 hours ago</p>
                </div>
              </div>

              <h4 className="font-bold text-slate-900 mb-2">Need help with UK university applications</h4>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Looking for an experienced counselor to help with UCAS application, personal statement, and interview preparation for top UK universities...
              </p>

              <div className="space-y-3">
                {[
                  { name: "Offer from Sarah M.", price: "$450", desc: "15+ years UK admissions • 5-day delivery", highlight: false },
                  { name: "Offer from James K.", price: "$380", desc: "10 years experience • 7-day delivery", highlight: true },
                  { name: "Offer from Emma L.", price: "$520", desc: "Former Oxford admissions • 3-day delivery", highlight: false },
                ].map((offer, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${offer.highlight ? 'border-secondary-200 bg-secondary-50/50' : 'border-slate-100 bg-slate-50/50'} flex justify-between items-center`}>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{offer.name}</p>
                      <p className="text-xs text-slate-500">{offer.desc}</p>
                    </div>
                    <span className={`font-bold ${offer.highlight ? 'text-secondary-600' : 'text-primary-600'}`}>{offer.price}</span>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-5 -right-5 bg-secondary-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 animate-bounce">
                3 Offers Received
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;