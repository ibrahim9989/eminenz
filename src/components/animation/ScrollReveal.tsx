import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  direction = 'up',
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10';
      case 'down':
        return '-translate-y-10';
      case 'left':
        return 'translate-x-10';
      case 'right':
        return '-translate-x-10';
      default:
        return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : undefined,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;