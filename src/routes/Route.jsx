import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../component/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ChefDetails from "../component/ChefDetails/ChefDetails";
import Blog from "../component/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";

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
        element: <ChefDetails></ChefDetails>,
        loader: async ({ params }) => {
          try {
            const response = await fetch("http://localhost:4000/chef");
            const data = await response.json();

            if (!Array.isArray(data)) {
              throw new Error("Data is not an array.");
            }
            const chefs = data.filter((chef) => chef.chefs.id == params.chefId);
            console.log(chefs);
            return chefs || null;
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      },
    ],
  },
]);
export default router;
