import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-1000 ease-out"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TextReveal;