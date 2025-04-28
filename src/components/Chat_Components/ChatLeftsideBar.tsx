import React from 'react';
import { Card } from '../ui/card';
import { LucideArchiveX, PlusCircle, RecycleIcon, RemoveFormatting } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {};

const ChatLeftsideBar = (props: Props) => {
  const [chatList, setChatList] = React.useState<
    { id: number; name: string }[]
  >([]);
  const [activeChat, setActiveChat] = React.useState(1);

  const handleNewChat = () => {
    const newChat = {
      id: chatList.length + 1,
      name: `Chat ${chatList.length + 1}`,
    };
    setChatList([...chatList, newChat]);
  };
  const handleClearAll = () => {
    setChatList([]);
  };

  return (
    <>
      <Card className="flex w-3xs  px-2 mx-2 h-screen">
        <div className="flex border-3 border-border items-center rounded-2xl   justify-between mx-auto px-3   p-2 w-full">
          <h1 className="caret-transparent"> New Chat </h1>
          <Button variant={'ghost'} onClick={() => handleNewChat()}>
            <PlusCircle className=' size-5' />
          </Button>
        </div>

        <div className="flex flex-col gap-2 h-full overflow-y-auto">
          <h1 className="caret-transparent"> Chats </h1>
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`flex rounded-2xl justify-between mx-auto px-3 cursor-pointer   p-2 w-full ${activeChat === chat.id ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <h1 className="caret-transparent"> {chat.name} </h1>
            </div>
          ))}
        </div>

        <div className="flex rounded-2xl justify-between mx-auto px-3 items-center   p-2 w-full">
          <h1 className="caret-transparent"> Clear all chat </h1>
          <Button variant={'ghost'} onClick={() => handleClearAll()}>
            <LucideArchiveX className=' size-5'/>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ChatLeftsideBar;
