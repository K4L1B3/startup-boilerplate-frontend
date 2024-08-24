import React from 'react';

interface SuggestionBoxProps {
  text: string;
  icon: React.ReactElement;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ text, icon }) => {
  return (
    <div className="flex h-[180px] w-[180px] flex-shrink-0 cursor-pointer flex-col justify-between rounded-lg bg-[#052639] p-4 transition-colors duration-200 hover:bg-[#0a3a54]">
      <p className="text-sm text-white">{text}</p>
      <div className="self-end">{icon}</div>
    </div>
  );
};

export default SuggestionBox;
