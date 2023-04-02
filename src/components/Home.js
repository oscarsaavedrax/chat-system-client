import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { SocketContext } from "../contexts/socket.js";

const Home = () => {
  // Get socket form SocketContext
  const socket = useContext(SocketContext);
  // In order to navigate routes and pages
  const navigate = useNavigate();
  // State to hold and change username
  const [userName, setUserName] = useState("");

  // Connect to the server
  useEffect(() => {
    socket.connect();
    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);

  // Store username and navigate to chat page
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ChatAppPractice-userName", userName);
    // Sends username and socket id to server
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
