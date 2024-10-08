import dotenv from "dotenv";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? "https://chat-app-c0yf.onrender.com"
        : "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// whenever user connects,who is online and offline and grab with event name 'getOnlineUsers'
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events,can be use in client and server
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    // when a user disconnect delete userId from userSocketMap
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
