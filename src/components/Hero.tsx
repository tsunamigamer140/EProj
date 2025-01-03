import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Odour Control Solutions in India
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ecosorb® Industrial provides innovative and environmentally friendly solutions 
              for industrial odour control across India.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://butterflymx.com/wp-content/uploads/2024/07/industrial-facilities.jpg&fit=crop&q=80"
              alt="Industrial facility"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
