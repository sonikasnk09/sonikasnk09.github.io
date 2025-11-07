import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            If you’d like to discuss a project, collaboration, or job opportunity, feel free to reach out.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <a href="mailto:sonikasnk09@gmail.com" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Email</h3>
                <p className="mt-2 text-slate-400 text-center group-hover:text-white transition-colors">
                    sonikasnk09@gmail.com
                </p>
            </a>

             {/* LinkedIn Card */}
             <a href="https://linkedin.com/in/sonikasnk" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0077b5]/50 transition-all duration-300">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#0077b5]/20 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-300">
                    <Linkedin className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">LinkedIn</h3>
                <p className="mt-2 text-slate-400 text-center group-hover:text-white transition-colors">
                    linkedin.com/in/sonikasnk
                </p>
            </a>

            {/* Phone Card */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <Phone className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Phone</h3>
                <p className="mt-2 text-slate-400 text-center">
                    +1 937-794-3865
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
