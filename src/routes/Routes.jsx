import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/event/:id",
            element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
            loader: () => fetch('../events.json')
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/about",
            element: <PrivateRoutes><About></About></PrivateRoutes>
        },
        {
            path: "/career",
            element: <PrivateRoutes><Career></Career></PrivateRoutes>
        },
      ]
    },
  ]);

  export default routes;