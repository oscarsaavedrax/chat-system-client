import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/socket";

const ChatBar = () => {
  // Get socket from socket context
  const socket = useContext(SocketContext);
  // Create a list of users
  const [users, setUsers] = useState([]);

  // Listen for new users from server
  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user, index) => (
            <div className={"index" + index} key={user.socketID}>
              {user.userName} {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
