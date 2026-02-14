import React from 'react';
import { ShieldCheck, Star, TrendingUp, Award, MoreHorizontal, GraduationCap, MapPin, ArrowUpRight } from 'lucide-react';

const counselors = [
  {
    name: "Sarah Jenkins",
    role: "Senior Admissions",
    uni: "Stanford University",
    uniLogo: "S",
    rating: 5.0,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["Ivy League", "Essays"],
    color: "bg-red-50 text-red-700"
  },
  {
    name: "David Chen",
    role: "Career Strategist",
    uni: "MIT Sloan",
    uniLogo: "M",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["STEM", "Internships"],
    color: "bg-blue-50 text-blue-700"
  },
  {
    name: "Emily Rodriguez",
    role: "Intl. Applications",
    uni: "Oxford University",
    uniLogo: "O",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["UK Apps", "IB Diploma"],
    color: "bg-indigo-50 text-indigo-700"
  }
];

const Quality: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-sans">
            World-Class Mentors. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Real-World Results.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We vet thousands of applicants to bring you the top 1% of educational counselors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Counselor List (Span 7) */}
          <div className="lg:col-span-7">
             <div className="flex items-center justify-between mb-8">
               <h3 className="font-bold text-navy-900 text-xl">Top Rated This Week</h3>
               <button className="text-primary-600 font-bold text-sm hover:underline">View All Experts</button>
             </div>

             <div className="space-y-6">
               {counselors.map((counselor, idx) => (
                 <div key={idx} className="group relative bg-white border border-slate-100 rounded-3xl p-5 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                   
                   {/* Hover Gradient Effect */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                   <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                     {/* Image */}
                     <div className="relative flex-shrink-0">
                       <img src={counselor.image} alt={counselor.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
                       <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-md">
                         <div className="bg-yellow-400 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                           {counselor.rating}
                         </div>
                       </div>
                     </div>

                     {/* Content */}
                     <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-start mb-2">
                         <div>
                           <h3 className="text-lg font-bold text-navy-900 truncate">{counselor.name}</h3>
                           <p className="text-sm text-slate-500">{counselor.role}</p>
                         </div>
                         <div className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${counselor.color}`}>
                           <GraduationCap size={14} />
                           {counselor.uni}
                         </div>
                       </div>

                       <div className="flex flex-wrap gap-2 mt-3">
                         {counselor.tags.map(tag => (
                           <span key={tag} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg font-medium border border-slate-100 group-hover:border-primary-100 group-hover:text-primary-600 transition-colors">
                             {tag}
                           </span>
                         ))}
                       </div>
                     </div>

                     {/* Action */}
                     <div className="flex flex-row sm:flex-col justify-between sm:justify-center items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
                        <div className="sm:hidden flex items-center gap-2 text-xs font-bold text-slate-600">
                          <GraduationCap size={14} />
                          {counselor.uni}
                        </div>
                        <button className="bg-navy-900 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary-600 transition-colors w-full sm:w-auto whitespace-nowrap">
                          View Profile
                        </button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Column: Dark Dashboard (Span 5) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-navy-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full blur-[80px] opacity-20"></div>

              <div className="relative z-10">
                <div className="mb-8">
                   <div className="flex items-center gap-2 mb-2">
                     <TrendingUp className="text-green-400" size={24} />
                     <span className="text-green-400 font-bold tracking-wide uppercase text-xs">Live Platform Metrics</span>
                   </div>
                   <h3 className="text-3xl font-bold font-sans">Consistency <br/> You Can Trust.</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric Card 1 */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                    <p className="text-slate-400 text-xs font-medium mb-1">Acceptance Rate</p>
                    <p className="text-3xl font-bold">98%</p>
                    <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                      <TrendingUp size={12} /> +4% vs National Avg
                    </div>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
                    <p className="text-slate-400 text-xs font-medium mb-1">Active Mentors</p>
                    <p className="text-3xl font-bold">500+</p>
                    <div className="mt-2 flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-5 h-5 rounded-full bg-slate-400 border border-navy-900"></div>
                      ))}
                    </div>
                  </div>

                  {/* Metric Card 3 (Full Width) */}
                  <div className="col-span-2 bg-gradient-to-r from-primary-600 to-primary-700 p-5 rounded-2xl relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                     <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                        <Award size={80} />
                     </div>
                     <div className="relative z-10 flex items-center justify-between">
                       <div>
                         <p className="text-primary-100 text-xs font-medium mb-1">Client Satisfaction</p>
                         <p className="text-2xl font-bold">4.9/5 Stars</p>
                       </div>
                       <div className="bg-white/20 p-2 rounded-lg">
                         <ArrowUpRight className="text-white" size={20} />
                       </div>
                     </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-slate-400 text-sm mb-4">Ready to start your journey?</p>
                  <button className="w-full bg-white text-navy-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    Get Matched Today
                  </button>
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