import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { useAuthContext } from "../context/AuthContext";
import Home from "../pages/home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

const Router = () => {
  const { authUser } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: "/",
          element: authUser ? <Home /> : <Navigate to={"/log-in"} replace />,
        },
        {
          path: "/sign-up",
          element: authUser ? <Navigate to={"/"} replace /> : <SignUp />,
        },
        {
          path: "/log-in",
          element: authUser ? <Navigate to={"/"} replace /> : <LogIn />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
