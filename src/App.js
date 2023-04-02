import "./App.css";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import { SocketContext, socket } from "./contexts/socket.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/chat" element={<ChatPage />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </SocketContext.Provider>
    </>
  );
}

export default App;
