import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: "/", element: <Home /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/log-in", element: <LogIn /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
