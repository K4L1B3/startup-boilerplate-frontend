import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
}) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#2578b5] via-[#74b4e4] via-[#8ab4f8] via-[#c3d7ff] via-[#f8f9fa] to-[#ffffff] bg-[length:400%_100%] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
