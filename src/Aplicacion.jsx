import { useEffect, useState } from "react";
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
import Juego from "./paginas/Juego";

const Aplicacion = () => {
    const [sesionIniciada, setSesionIniciada] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('userToken')){
            setSesionIniciada(true)
        }
    })

    return <>
        <BarraDeNavegacion sesionIniciada = {sesionIniciada} />

        <Routes>
            <Route path = "/" element = {<Inicio />} />
            <Route path = "/tienda" element = {<Tienda />} />
            <Route path = "/tienda/:genre" element = {<Tienda />} />
            <Route path = "juego/:id" element = {<Juego />} />
            <Route path = "tienda/juego/:id" element = {<Juego />} />
            <Route path = "/comunidad" element = {<Comunidad />} />
            <Route path = "/ingreso" element = {<Ingreso iniciarSesion = {(x) => {setSesionIniciada(x)}} />} />
            <Route path = "/registro" element = {<Registro iniciarSesion = {(x) => {setSesionIniciada(x)}}/>} />
            <Route path = "/perfil" element = {<Perfil iniciarSesion = {(x) => {setSesionIniciada(x)}}/>} />
            <Route path = "/biblioteca" element = {<Biblioteca />} />
            <Route path = "/administracion" element = {<Administracion />} />
        </Routes>

        <PieDePagina />
    </>
}

export default Aplicacion
