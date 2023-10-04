import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PlayingSlelctorTwo from "./Pages/PlayingSelector/PlayingSelectorTwo";
import PlayingSelectorOne from "./Pages/PlayingSelector/PlayingSelectorOne/PlayingSelectorOne";
import RenderingWith1Player from "./Pages/RenderingWith1Player/RenderingWith1Player";

const MyRouters: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "onePerson",
      element: <PlayingSelectorOne />,
    },
    {
      path: "onePerson/easy",
      element: <RenderingWith1Player />,
    },
    {
      path: "onePerson/middle",
      element: <PlayingSlelctorTwo />,
    },
    {
      path: "onePerson/hard",
      element: <PlayingSlelctorTwo />,
    },
    {
      path: "twoPerson",
      element: <PlayingSlelctorTwo />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MyRouters;
