import { createBrowserRouter } from "react-router-dom";
import Tienda from "./paginas/Tienda";
import Comunidad from "./paginas/Comunidad";
import AcercaDe from "./paginas/AcercaDe";
import Soporte from "./paginas/Soporte"
import IniciarSesion from "./paginas/IniciarSesion";

const rutas = createBrowserRouter([
    {path : "/", element : <Tienda />},
    {path : "/comunidad", element : <Comunidad />},
    {path : "/acerca_de", element : <AcercaDe />},
    {path : "/soporte", element : <Soporte />},
    {path : "/iniciar_sesion", element : <IniciarSesion />}
])

export default rutas