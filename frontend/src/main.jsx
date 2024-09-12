import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import Routes from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  </StrictMode>,
);
