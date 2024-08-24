import React from 'react';
import SendButtonConversation from '@/components/atoms/send-button-conversation/send-button-conversation';
import { SendIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const ConversationBar: React.FC = () => {
  return (
    <div className="relative mt-6">
      <Textarea
        placeholder="Type your message here."
        className="max-h-28 min-h-0 w-full rounded-lg border-none bg-[#052639] pr-16 text-white placeholder-gray-400"
      />
      <SendButtonConversation className="absolute right-4 top-1/2 -translate-y-1/2 transform lg:right-8">
        <SendIcon className="h-5 w-5 transform text-[#44B9FF] transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110 active:rotate-45 active:scale-90" />
      </SendButtonConversation>
    </div>
  );
};

export default ConversationBar;
