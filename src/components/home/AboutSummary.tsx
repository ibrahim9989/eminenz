import React from 'react';
import { ArrowRight } from 'lucide-react';
import AboutDetails from '../about/AboutDetails';
import ScrollReveal from '../animation/ScrollReveal';

const AboutSummary = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Eminenz International LLP is a global leader in industrial innovation, 
              committed to delivering sustainable solutions tailored to modern challenges.
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </ScrollReveal>

        {showDetails && <AboutDetails />}
      </div>
    </section>
  );
};

export default AboutSummary;