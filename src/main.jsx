import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home";
import P404 from "./pages/P404";
import ListProjets from "./pages/ListProjets";
// import Contact from "./pages/Contact.jsx";

import { ProjetsProvider } from "./components/GetProjet";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
            <Analytics />
        </NextUIProvider>
    </React.StrictMode>
);
