import React from 'react';
import { Database, BarChart3, Megaphone, LineChart, Code2 } from 'lucide-react';

const skillGroups = [
  {
    title: "Data Analytics",
    icon: <Database className="h-6 w-6 text-accent" />,
    skills: ["Python", "MySQL", "Excel", "SPSS", "Google Sheets", "Data Cleaning", "Cohorts & Funnels"],
  },
  {
    title: "Visualization & BI",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    skills: ["Power BI", "Tableau", "Looker Studio", "Zoho Analytics", "SAP S/4HANA"],
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-6 w-6 text-pink-500" />,
    skills: ["SEO & SEM", "Email Marketing", "Social Media", "PPC", "A/B Testing"],
  },
  {
    title: "Marketing Tools",
    icon: <LineChart className="h-6 w-6 text-green-500" />,
    skills: ["Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "Screaming Frog", "Mailchimp", "GSC"],
  },
  {
    title: "Web & Management",
    icon: <Code2 className="h-6 w-6 text-orange-500" />,
    skills: ["WordPress", "HTML/CSS (Basic)", "Jira", "Notion", "Slack", "Microsoft Office", "Github"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Expertise</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            My Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            A powerful combination of technical data skills and strategic marketing knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="relative group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-300">
                {React.cloneElement(group.icon as React.ReactElement<any>, { className: `h-16 w-16 ${(group.icon.props as any).className?.split(' ').pop() ?? ''}` })}
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {group.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;