import React from 'react';
import DirectorMessage from './DirectorMessage';
import CompanyValues from './CompanyValues';
import Timeline from './Timeline';
import ScrollReveal from '../animation/ScrollReveal';

const AboutDetails = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Towards Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our inception, Eminenz International LLP has been at the forefront of industrial innovation, 
              driving sustainable solutions across multiple sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 mb-8">
                To be the global leader in providing innovative industrial solutions that drive sustainable growth 
                and technological advancement across sectors, while maintaining the highest standards of quality 
                and environmental responsibility.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600">
                To deliver cutting-edge solutions that empower businesses to overcome their operational challenges, 
                optimize efficiency, and achieve sustainable growth through innovation, expertise, and unwavering 
                commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Modern office building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </ScrollReveal>
        </div>

        <CompanyValues />
        <DirectorMessage />
        <Timeline />
      </div>
    </div>
  );
};

export default AboutDetails;