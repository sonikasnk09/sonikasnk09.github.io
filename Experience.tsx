import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  "Increased organic website traffic on an e-commerce site by 49% YoY, contributing to 79.9% revenue growth through a comprehensive website enhancement plan.",
  "Reduced customer churn by 12% by developing Excel and Power BI dashboards for churn analysis and customer feedback trends.",
  "Built automated email workflows in HubSpot and integrated CRM data for personalized email marketing, boosting open rates by 12.37%.",
  "Extract, clean, and analyze complex datasets from multiple marketing and sales platforms using SQL, Excel, and Python to optimize campaign performance.",
  "Developed SQL queries for data validation, quality checks, and partner data requests.",
  "Leveraged Python & Jupyter Notebooks to clean, normalize, and compare cross-system data.",
  "Conducted trend analysis and statistical testing to uncover issues in digital engagement and site traffic conversions.",
  "Translated technical/business requirements into optimized data solutions guiding cross-functional teams."
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-3 gap-12">
            {/* Header section sticks on large screens */}
            <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-28">
                    <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Career Highlights</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        My Experience
                    </p>
                    <p className="mt-4 text-lg text-slate-500">
                        A track record of delivering data-driven results and optimizing digital strategies across various platforms.
                    </p>
                    <div className="mt-8 hidden lg:block">
                       <a href="/assets/cv/Sonika Resume.pdf" target="_blank" className="text-primary font-medium hover:text-indigo-700 flex items-center">
                         View Full Resume →
                       </a>
                    </div>
                </div>
            </div>

            {/* List section */}
            <div className="lg:col-span-2">
                <div className="space-y-6">
                    {experiences.map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 md:p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-200">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Experience;
