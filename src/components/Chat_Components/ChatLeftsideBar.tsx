import React from 'react';
import { Card } from '../ui/card';
import { Edit2Icon, LucideArchiveX, PlusCircle } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

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
  const handleDeleteChat = (id: number) => {
    setChatList(chatList.filter((chat) => chat.id !== id));
  };
  const handleRenameChat = (id: number, newName: string) => {
    setChatList(
      chatList.map((chat) => {
        if (chat.id === id) {
          return { ...chat, name: newName };
        }
        return chat;
      })
    );
  };
  const handleClearAll = () => {
    setChatList([]);
  };

  const shortenString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  };

  return (
    <>
      <Card className="flex w-3xs  px-2 mx-2 h-screen">
        <div className="flex border-3 border-border items-center rounded-2xl   justify-between mx-auto px-3   p-2 w-full">
          <h1 className="caret-transparent"> New Chat </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'} onClick={() => handleNewChat()}>
                  <PlusCircle className=" size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                className="bg-primary-foreground text-black"
                side="right"
              >
                <p>New Chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-col gap-2 h-full overflow-y-scroll">
          <h1 className="caret-transparent"> Chats </h1>
          {chatList.length === 0 && (
            <div className="flex justify-center h-full">
              <h1 className="text-gray-500">No chats available</h1>
            </div>
          )}
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`flex rounded-2xl justify-between items-center  mx-auto px-3 cursor-pointer p-2 w-full ${activeChat === chat.id ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <h1 className="caret-transparent cursor-context-menu">
                {shortenString(chat.name, 10)}
              </h1>
              <div className="flex ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={'ghost'}
                        onClick={(e) => {
                          e.stopPropagation();
                          const newName = prompt('Enter new name', chat.name);
                          if (newName) {
                            handleRenameChat(chat.id, newName);
                          }
                        }}
                      >
                        <Edit2Icon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-primary-foreground text-black"
                      side="right"
                    >
                      <p>Rename</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={'ghost'}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteChat(chat.id);
                        }}
                      >
                        <LucideArchiveX />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-primary-foreground text-black"
                      side="right"
                    >
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>

        <div className="flex rounded-2xl justify-between mx-auto px-3 items-center     w-full">
          <h1 className="caret-transparent cursor-context-menu">
            Clear all chat
          </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'} onClick={() => handleClearAll()}>
                  <LucideArchiveX className=" size-5  " />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                className="bg-primary-foreground text-black"
                side="right"
              >
                <p>Clear all chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </>
  );
};

export default ChatLeftsideBar;
