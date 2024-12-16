import React from 'react';
import ParallaxSection from '../animation/ParallaxSection';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <ParallaxSection speed={0.5} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-scaleIn"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80"></div>
        </div>
      </ParallaxSection>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left max-w-3xl">
          <div className="mb-6 space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight block mb-4">
              Innovating Industries.<br />
              Empowering Futures.
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Comprehensive solutions for energy, water, infrastructure, and beyond.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <a
              href="#services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 card-hover-effect"
            >
              Explore Our Services
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:-translate-y-1 card-hover-effect"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;