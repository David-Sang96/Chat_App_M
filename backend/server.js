import axios from "axios";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import schedule from "node-schedule";
import path from "path";

import connectToMongo from "./db/connectToMongo.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Set up a scheduled task using node-schedule
schedule.scheduleJob("*/15 * * * *", async () => {
  try {
    await axios.get("https://chat-app-c0yf.onrender.com");
    console.log("Keep-alive request sent");
  } catch (error) {
    console.error("Error sending keep-alive request:", error.message);
  }
});

server.listen(PORT, async () => {
  await connectToMongo();
  console.log(`Server is listing on PORT ${PORT}`);
});
