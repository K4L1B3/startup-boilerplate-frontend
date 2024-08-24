import SuggestionBox from '@/components/atoms/suggestion-box/suggestion-box';
import React from 'react';

interface Suggestion {
  icon: React.ReactElement;
  text: string;
}

interface SuggestionListProps {
  suggestions: Suggestion[];
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions }) => {
  return (
    <div>
      <p className="mb-4 text-white opacity-80">
        Usuários que estão tendo bons resultados andam pesquisando por isso:
      </p>
      <div className="scrollbar-hide overflow-x-auto">
        <div className="flex min-w-max gap-8 pb-4 md:min-w-0 md:gap-2 md:pb-0 lg:gap-3">
          {suggestions.map((suggestion, index) => (
            <SuggestionBox
              key={index}
              text={suggestion.text}
              icon={suggestion.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionList;
