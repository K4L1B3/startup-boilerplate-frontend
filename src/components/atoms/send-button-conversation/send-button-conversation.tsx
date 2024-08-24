import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const SendButtonConversation: React.FC<ButtonProps> = ({
  children,
  className = '',
}) => {
  return (
    <button
      className={`rounded-full bg-transparent p-2 hover:bg-[#0a3a54] ${className}`}
    >
      {children}
    </button>
  );
};

export default SendButtonConversation;
