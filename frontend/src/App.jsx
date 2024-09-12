import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Outlet />
    </div>
  );
}

export default App;
