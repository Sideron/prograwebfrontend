import { useState } from "react";
import {Route, Routes} from "react-router-dom"

import BarraDeNavegacion from "./componentes/BarraDeNavegacion";

import Inicio from "./paginas/Inicio";
import Tienda from "./paginas/Tienda";
import Biblioteca from "./paginas/Biblioteca";
import Comunidad from "./paginas/Comunidad";
import Perfil from "./paginas/Perfil";
import Registro from "./paginas/Registro";
import Ingreso from "./paginas/Ingreso";
import Administracion from "./paginas/Administracion";

import PieDePagina from "./componentes/PieDePagina";

import "./estilos/Aplicacion.css"

const Aplicacion = () => {
    const [sesionIniciada, setSesionIniciada] = useState(false)

    return <>
        <BarraDeNavegacion sesionIniciada = {sesionIniciada} />

        <Routes>
            <Route path = "/" element = {<Inicio />} />
            <Route path = "/tienda" element = {<Tienda />} />
            <Route path = "/comunidad" element = {<Comunidad />} />
            <Route path = "/ingreso" element = {<Ingreso iniciarSesion = {(x) => {setSesionIniciada(x)}} />} />
            <Route path = "/registro" element = {<Registro iniciarSesion = {(x) => {setSesionIniciada(x)}}/>} />
            <Route path = "/perfil" element = {<Perfil />} />
            <Route path = "/biblioteca" element = {<Biblioteca />} />
            <Route path = "/administracion" element = {<Administracion />} />
        </Routes>

        <PieDePagina />
    </>
}

export default Aplicacion
