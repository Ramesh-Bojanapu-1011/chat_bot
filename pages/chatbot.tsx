import ChatLeftsideBar from '@/components/Chat_Components/ChatLeftsideBar';
import { Card } from '@/components/ui/card';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const ChatBotPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatBotPage</title>
      </Head>
      <>
        <div>
          <ChatLeftsideBar />
        </div>
      </>
    </>
  );
};

export default ChatBotPage;
