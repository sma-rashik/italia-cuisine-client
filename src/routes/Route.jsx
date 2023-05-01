import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../component/Home";
import Login from "../component/Login/Login";

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
    ],
  },
]);
export default router;
