import React, { useContext, useState } from "react";
import { SocketContext } from "../contexts/socket";

const ChatFooter = () => {
  // Get the socket from the socket context
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Check message is not empty & username exists
    if (message.trim() && localStorage.getItem("ChatAppPractice-userName")) {
      // Send message to the server
      socket.emit("send-message", {
        text: message,
        name: localStorage.getItem("ChatAppPractice-userName"),
        id: "" + socket.id + Math.random(),
        socketID: socket.id,
      });
    }
    // Reset message input
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
