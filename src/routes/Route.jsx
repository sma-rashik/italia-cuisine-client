import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../component/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
