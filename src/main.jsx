
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
  Link,
  Route,
} from "react-router-dom";
import "./index.css";

import Home from "./pages/Home"
import P404 from "./pages/P404"
import ListProjets from "./pages/ListProjets";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <P404 />,
  },
  {
    path: "projets",
    element: <ListProjets />,
    children : [
      {
        path: "1",
        element: <P404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);