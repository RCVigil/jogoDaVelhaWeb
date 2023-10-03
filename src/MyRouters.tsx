import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PlayingSlelctorTwo from "./Pages/PlayingSelector/PlayingSlelctorTwo";
import PlayingSelectorOne from "./Pages/PlayingSelector/PlayingSelectorOne";

const MyRouters: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      //   element: <PlayingSlelctorTwo />,
    },
    {
      path: "onePerson",
      element: <PlayingSelectorOne />,
    },
    {
      path: "twoPerson",
      element: <PlayingSlelctorTwo />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MyRouters;
