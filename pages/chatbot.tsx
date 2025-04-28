import ChatLeftsideBar from '@/components/Chat_Components/ChatLeftsideBar';
import ChatRightside from '@/components/Chat_Components/ChatRightside';
import { NextPage } from 'next';
import Head from 'next/head';

const ChatBotPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatBotPage</title>
      </Head>
      <>
        <div className="flex">
          <ChatLeftsideBar />
          <ChatRightside />
        </div>
      </>
    </>
  );
};

export default ChatBotPage;
