import { createBrowserRouter } from "react-router-dom";
import Tienda from "./paginas/Tienda.jsx";
import Comunidad from "./paginas/Comunidad.jsx";
import AcercaDe from "./paginas/AcercaDe.jsx";
import Soporte from "./paginas/Soporte.jsx"
import IniciarSesion from "./paginas/IniciarSesion.jsx";

const rutas = createBrowserRouter([
    {path : "/", element : <Tienda />},
    {path : "/comunidad", element : <Comunidad />},
    {path : "/acerca_de", element : <AcercaDe />},
    {path : "/soporte", element : <Soporte />},
    {path : "/iniciar_sesion", element : <IniciarSesion />}
])

export default rutas
