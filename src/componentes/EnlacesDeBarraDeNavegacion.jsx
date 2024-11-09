import { Link } from "react-router-dom"

const EnlacesDeBarraDeNavegacion = (propiedades) => {
    const renderizarEnlace = (enlace) => {
        if (propiedades.sesionIniciada) {
            return <>
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === enlace.nombreAlterno ? " active" : "")}
                        to={enlace.rutaAlterna} onClick={() => {propiedades.setEnlaceSeleccionado(enlace.nombreAlterno)}}>
                    {enlace.nombreAlterno}
                </Link>
            </>
        }
        else {
            return <>
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === enlace.nombre ? " active" : "")}
                        to={enlace.ruta} onClick={() => {propiedades.setEnlaceSeleccionado(enlace.nombre)}}>
                    {enlace.nombre}
                </Link>
            </>
        }
            
    } 

    return <>
        <div className="collapse navbar-collapse" id="contenedor_de_enlaces_barra">
            <div className="navbar-nav mx-4">
                {propiedades.listaDeEnlaces.map(renderizarEnlace)}
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion