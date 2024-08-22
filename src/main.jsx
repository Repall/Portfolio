import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home";
import P404 from "./pages/P404";
import ListProjets from "./pages/ListProjets";

import ProjetRedirect from "./components/ProjetsRedirect.jsx";
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
                element: <ListProjets />,
            },
            {
                path: "projet/:id",
                element: <ProjetRedirect />,
            },
            {
                path: "*",
                element: <P404 />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProjetsProvider>
            <RouterProvider router={router} />
        </ProjetsProvider>
    </React.StrictMode>
);
