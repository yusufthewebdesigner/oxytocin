// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slider from "./components/JSX/Slider.jsx";
import Users from "./components/JSX/Users.jsx";
import Developer from "./components/JSX/Developer.jsx";
import UserDetails from "./components/JSX/UserDetails.jsx";
import Photos from "./components/Photos/Photos.jsx";
import Photo from "./components/Photos/Photo.jsx";
import Error from "./components/JSX/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Slider></Slider>,
      },
      {
        path: "/oxy13",
        element: <Slider></Slider>,
      },
      {
        path: "/photos",
        element: <Photos></Photos>,
      },
      {
        path: "/photos/:photoId",
        element: <Photo></Photo>,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/student"),
        element: <Users></Users>,
      },
      {
        path: "/users/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/student/${params.id}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/aboutDev",
        element: <Developer></Developer>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
