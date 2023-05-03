import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../component/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ChefDetails from "../component/ChefDetails/ChefDetails";
import Blog from "../component/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/chef/:chefId",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/chef/${params.chefId}`),
      },
    ],
  },
]);
export default router;
