import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Academic Background</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Wright State */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <GraduationCap className="h-8 w-8" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Wright State University</h3>
                    <p className="text-slate-500 text-sm">Main Campus — Dayton, Ohio</p>
                </div>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">
              Master of Science in Marketing Analytics and Insights
            </h4>
            <div className="mt-auto pt-6 flex items-center justify-between text-sm font-medium">
               <span className="flex items-center text-slate-500">
                 <Calendar className="h-4 w-4 mr-2" />
                 Aug 2022 – Jul 2024
               </span>
               <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
                GPA: 3.6
               </span>
            </div>
          </div>

          {/* Delhi University */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 text-accent rounded-xl">
                    <GraduationCap className="h-8 w-8" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Delhi University</h3>
                    <p className="text-slate-500 text-sm">Kalindi College — New Delhi, India</p>
                </div>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">
              Bachelor of Science in Life Sciences
            </h4>
            <div className="mt-auto pt-6 flex items-center justify-between text-sm font-medium">
               <span className="flex items-center text-slate-500">
                 <Calendar className="h-4 w-4 mr-2" />
                 Jul 2017 – May 2020
               </span>
               <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                GPA: 3.0
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
