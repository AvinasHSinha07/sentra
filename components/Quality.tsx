import React from 'react';
import { ShieldCheck, Calendar, Award, Globe, Star, AlertTriangle, TrendingUp, BarChart } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Counselors. Real Experience. Real Impact.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our counselors aren't just advisors—they're professionals who spend every day working with students, understanding their challenges, and celebrating their successes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: ShieldCheck, title: "School-Based", desc: "Every counselor works in educational institutions, verified with employment proof.", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Calendar, title: "Daily Expertise", desc: "These counselors guide students through applications and decisions day in and day out.", color: "text-teal-500", bg: "bg-teal-50" },
            { icon: Award, title: "Years of Success", desc: "Benefit from counselors who have helped hundreds of students achieve their dreams.", color: "text-orange-500", bg: "bg-orange-50" },
            { icon: Globe, title: "Beyond Walls", desc: "Expertise isn't limited by geography—access world-class guidance from anywhere.", color: "text-green-500", bg: "bg-green-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quality Promise Section */}
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-3 py-1 mb-4">
              <ShieldCheck size={14} className="text-green-700" />
              <span className="text-xs font-semibold text-green-800 uppercase">Our Quality Promise</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Only Top-Performing Counselors Stay Active</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We continuously monitor counselor performance to ensure you receive exceptional guidance every time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Star size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Quality Threshold: 3.5/5</h4>
              <p className="text-slate-600 text-sm mb-4">Every session is rated. Counselors must maintain an average of 3.5 or higher.</p>
              <div className="w-full bg-white rounded-md h-2 overflow-hidden">
                <div className="bg-blue-500 h-full w-3/4"></div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4">
                <AlertTriangle size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Automatic Suspension</h4>
              <p className="text-slate-600 text-sm">Counselors with 3 consecutive low ratings are automatically suspended for 30 days.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Smart Weighted Ratings</h4>
              <p className="text-slate-600 text-sm">Recent performance matters most. 70% weight on recent 10 sessions.</p>
            </div>
          </div>
        </div>

        {/* Blue Box - Recognition */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-[2rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-2xl font-bold mb-4">Recognition for Excellence</h3>
               <p className="text-primary-100 mb-8">Outstanding counselors earn visible quality badges that showcase their commitment to exceptional service.</p>
               
               <div className="space-y-4">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 border border-white/10">
                   <div className="bg-yellow-400 p-2 rounded-full">
                     <TrendingUp className="text-yellow-900" size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-white">Top Performer</p>
                     <p className="text-xs text-primary-200">4.7+ rating with 30+ completed sessions</p>
                   </div>
                 </div>
                 
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 border border-white/10">
                   <div className="bg-green-400 p-2 rounded-full">
                     <ShieldCheck className="text-green-900" size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-white">Trusted Counselor</p>
                     <p className="text-xs text-primary-200">4.2+ rating with 10+ completed sessions</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Right side graphical representation */}
             <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-6">
                  <BarChart size={40} className="text-white opacity-80" />
                </div>
                <div className="text-center mb-6">
                  <h4 className="font-bold text-lg">Transparency First</h4>
                  <p className="text-sm text-primary-200">Every counselor's rating is displayed publicly.</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 text-slate-800 shadow-lg">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
                    <span className="font-semibold text-sm">Overall Rating</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.8</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-500">
                    <div className="flex justify-between"><span>Guidance Quality</span><span className="font-medium text-slate-700">4.9/5</span></div>
                    <div className="flex justify-between"><span>Clarity & Helpfulness</span><span className="font-medium text-slate-700">4.8/5</span></div>
                    <div className="flex justify-between"><span>Professionalism</span><span className="font-medium text-slate-700">4.7/5</span></div>
                  </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;