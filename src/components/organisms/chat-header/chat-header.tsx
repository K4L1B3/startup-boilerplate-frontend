import GradientText from '@/components/atoms/gradient-text/gradient-text';
import React from 'react';

interface HeaderProps {
  userName: string;
}

const ChatHeader: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header>
      <h1 className="mb-2 mt-10 text-4xl font-semibold lg:text-5xl">
        <GradientText>Olá, {userName}</GradientText>
      </h1>
      <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">
        <GradientText className="from-[#dfeaff] via-[#f8f9fa] to-[#ffffff]">
          Como posso ajudá-lo hoje?
        </GradientText>
      </h2>
    </header>
  );
};

export default ChatHeader;
