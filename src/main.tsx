import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home.tsx";
import P404 from "./pages/P404.tsx";
import ListProjets from "./pages/ListProjets.tsx";
// import Contact from "./pages/Contact.jsx";

import { ProjetsProvider } from "./components/GetProjets.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <App />,
    children: [
      {
        path: "projets",
        element: (
          <ProjetsProvider>
            <ListProjets />
          </ProjetsProvider>
        ),
      },
      // {
      //     path: "contact",
      //     element: <Contact />,
      // },
      {
        path: "*",
        element: <P404 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
      <Analytics />
    </NextUIProvider>
  </StrictMode>
);
