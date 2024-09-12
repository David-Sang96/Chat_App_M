/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5200");
      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser, socket]);

  return <SocketContext.Provider value={{socket,onlineUser}}>{children}</SocketContext.Provider>;
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (context === undefined || context === null) {
    throw new Error(
      "useSocketContext must be used within an SocketContextProvider. Ensure the provider is wrapping your component tree.",
    );
  }

  return context;
};
