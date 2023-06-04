import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/HomePage/Home";
import Task from "../pages/MyTask/Task";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "task",
        element: <Task></Task>,
      },
    ],
  },
]);

export default Router;
