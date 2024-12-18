import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "./index.css"

import Aplicacion from "./Aplicacion.jsx"

const root = ReactDOM.createRoot(document.getElementById("raiz"));

root.render(
    <BrowserRouter>
        <Aplicacion />
    </BrowserRouter>
);
