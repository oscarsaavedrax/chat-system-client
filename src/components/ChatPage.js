import React, { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../contexts/socket";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatPage = () => {
  const socket = useContext(SocketContext);
  const [messageList, setMessageList] = useState([]);
  const lastMessageRef = useRef(null);

  // Get the list of messages from server
  useEffect(() => {
    socket.on("receive-message", (data) =>
      setMessageList([...messageList, data])
    );
  }, [socket, messageList]);

  // Scrool to bottom every time messages change
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody messages={messageList} lastMessageRef={lastMessageRef} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
