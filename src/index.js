import React from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import rutas from "./rutas";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import BarraDeNavegacion from "./componentes/BarraDeNavegacion"

const root = ReactDOM.createRoot(document.getElementById("raiz"));

root.render(
    <React.StrictMode>
        <BarraDeNavegacion />
        <RouterProvider router={rutas} />
    </React.StrictMode>
);