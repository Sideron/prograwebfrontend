import {Route, Routes} from "react-router-dom"

import BarraDeNavegacion from "./componentes/BarraDeNavegacion.jsx"
import Inicio from "./paginas/Inicio";
import Tienda from "./paginas/Tienda";
import Biblioteca from "./paginas/Biblioteca";
import Comunidad from "./paginas/Comunidad";
import Perfil from "./paginas/Perfil";
import Registro from "./paginas/Registro";
import Ingreso from "./paginas/Ingreso";
import Administracion from "./paginas/Administracion";


const Aplicacion = () => {
    return <>
        <BarraDeNavegacion />
        <Routes>
            <Route path = "/" element = {<Inicio />} />
            <Route path = "/tienda" element = {<Tienda />} />
            <Route path = "/biblioteca" element = {<Biblioteca />} />
            <Route path = "/comunidad" element = {<Comunidad />} />
            <Route path = "/perfil" element = {<Perfil />} />
            <Route path = "/registro" element = {<Registro />} />
            <Route path = "/ingreso" element = {<Ingreso />} />
            <Route path = "/administracion" element = {<Administracion />} />
        </Routes>
    </>
}

export default Aplicacion