import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home> 
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
  ]);

  export default router;