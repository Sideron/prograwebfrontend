import { Link } from "react-router-dom"

const EnlacesDeBarraDeNavegacion = (propiedades) => {
    return <>
        <div className="collapse navbar-collapse" id="contenedor_de_enlaces_barra">
            <div className="navbar-nav mx-4">
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "tienda" ? " active" : "")}
                    to="/tienda" onClick={() => {propiedades.setEnlaceSeleccionado("tienda")}}>Tienda</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "comunidad" ? " active" : "")}
                    to="/comunidad" onClick={() => {propiedades.setEnlaceSeleccionado("comunidad")}}>Comunidad</Link>

                {propiedades.sesionIniciada
                    ?
                    <>
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "perfil" ? " active" : "")}
                            to="/perfil" onClick={() => {propiedades.setEnlaceSeleccionado("perfil")}}>Perfil</Link>
                
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "biblioteca" ? " active" : "")}
                            to="/biblioteca" onClick={() => {propiedades.setEnlaceSeleccionado("biblioteca")}}>Biblioteca</Link>
                    </>
                    :
                    <>
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "ingreso" ? " active" : "")}
                            to="/ingreso" onClick={() => {propiedades.setEnlaceSeleccionado("ingreso")}}>Iniciar sesión</Link>
                
                        <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "registro" ? " active" : "")}
                            to="/registro" onClick={() => {propiedades.setEnlaceSeleccionado("registro")}}>Registrarse</Link>
                    </>
                }
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion