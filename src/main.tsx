import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Contato from "./pages/Contato";
import Home from "./pages/Home/index.tsx";
import Receita from "./pages/Receita/index.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/receita/:id",
        element: <Receita />,
    },
    {
        path: "/contato",
        element: <Contato />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
