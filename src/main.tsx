import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { ProjectInfo } from "./pages/ProjectInfo.tsx";
import InoLaunchpad from "./pages/InoLaunchpad.tsx";
import { Swap } from "./pages/Swap.tsx";
import IdoLaunchpad from "./pages/IdoLaunchpad.tsx";
import Gallery from "./pages/Gallery.tsx";
import Staking from "./pages/Staking.tsx";
import Bridge from "./pages/Bridge.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "project-info",
                element: <ProjectInfo />,
            },
            {
                path: "swap",
                element: <Swap />,
            },
            {
                path: "ino-launchpad",
                element: <InoLaunchpad />,
            },
            {
                path: "ido-launchpad",
                element: <IdoLaunchpad />,
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
            {
                path: "bridge",
                element: <Bridge />,
            },
            {
                path: "staking",
                element: <Staking />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
