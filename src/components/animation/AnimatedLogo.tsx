import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="text-center px-4 md:px-8">
      <div className="animate-fadeIn">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-8">
          Eminenz International LLP
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white italic">
          We exist for a better future
        </p>
      </div>
    </div>
  );
};

export default AnimatedLogo;