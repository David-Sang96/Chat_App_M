import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Outlet />
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}

export default App;
