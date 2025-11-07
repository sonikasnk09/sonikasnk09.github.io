import React from 'react';
import { ArrowRight, FileText, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance">
              Hello, I'm <span className="text-primary">Sonika</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-slate-600">
              Digital Analyst
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
              With over 3+ years of experience at the crossroads of digital marketing and data analytics,
              I combine the precision of data analysis with the agility of digital marketing,
              guiding cross-functional teams through data-driven narratives that support strategic decisions.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#skills"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Explore My Work
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="/assets/cv/Sonika Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <FileText className="mr-2 -ml-1 h-5 w-5 text-slate-400" />
                View Resume
              </a>
            </div>

            {/* Social Proof / Quick Links */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
                <a href="https://linkedin.com/in/sonikasnk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-7 w-7" />
                </a>
                <a href="mailto:sonikasnk09@gmail.com" className="text-slate-400 hover:text-primary transition-colors" aria-label="Email">
                    <Mail className="h-7 w-7" />
                </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
                {/* Decorative blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out aspect-[3/4] max-w-[280px] sm:max-w-sm mx-auto lg:mr-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
                    alt="Sonika Portrait"
                    className="object-cover w-full h-full bg-slate-100"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
