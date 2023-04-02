/*
 * Description: Create a socket useContext API to utilze the socket throughout different components of the application.
 * Developer: Oscar Saavedra
 */

// Import React - O.S.
import React from "react";
// Import socket.io for the client side - O.S.
import { io } from "socket.io-client";
// Set the url for the server
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";
// Create socket and autoconnect false to connect only when needed from other componenets - O.S.
export const socket = io.connect(URL, { autoConnect: false });
export const SocketContext = React.createContext();
