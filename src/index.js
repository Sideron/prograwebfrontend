import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import React from "react";
import ReactDOM from "react-dom/client"
import BarraDeNavegacion from "./componentes/BarraDeNavegacion.jsx"
import { RouterProvider } from "react-router-dom";
import "./index.css"
import rutas from "./rutas.js";


const root = ReactDOM.createRoot(document.getElementById("raiz"));

root.render(
    <React.StrictMode>
        <BarraDeNavegacion />
        <RouterProvider router={rutas} />
    </React.StrictMode>
);
