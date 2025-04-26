import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const ChatBotPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatBotPage</title>
      </Head>
      <div className="flex flex-col items-center justify-center   py-2 gap-14">
        <h1 className="text-3xl font-bold underline">ChatBot</h1>
        <div className="flex flex-col items-center justify-center  py-2 gap-14">
          <h1 className="text-3xl font-bold underline">ChatBot</h1>
          <p>Chatbot page content goes here.</p>
        </div>
      </div>
    </>
  );
};

export default ChatBotPage;
