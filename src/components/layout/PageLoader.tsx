import React from 'react';
import AnimatedLogo from '../animation/AnimatedLogo';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80"
        alt="Solar System"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <AnimatedLogo />
      </div>
    </div>
  );
};

export default PageLoader;