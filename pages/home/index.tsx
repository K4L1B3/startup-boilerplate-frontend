import { SideMenu } from '@/components/organisms/side-menu/side-menu';
import ChatbotInterface from '@/components/template/chatbot-interface/chatbot-interface';
import { NavMenuOcultContainer } from '@/components/template/nav-menu-ocult/nav-menu-ocult';
import NavMenu from '@/components/template/nav-menu-hamburger/nav-menu-hamburger';
import React from 'react';

export default function Home() {
  return (
    <div>
      <NavMenuOcultContainer>
        <ChatbotInterface />
      </NavMenuOcultContainer>
    </div>
  );
}
