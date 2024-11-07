import { Link } from "react-router-dom"

const EnlacesDeBarraDeNavegacion = (propiedades) => {
    return <>
        <div className="collapse navbar-collapse" id="div_colapsable">
            <div className="navbar-nav">
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "tienda" ? " active text-decoration-underline" : "")}
                    to="/tienda" onClick={() => {propiedades.setEnlaceSeleccionado("tienda")}}>Tienda</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "biblioteca" ? " active text-decoration-underline" : "")}
                    to="/biblioteca" onClick={() => {propiedades.setEnlaceSeleccionado("biblioteca")}}>Biblioteca</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "comunidad" ? " active text-decoration-underline" : "")}
                    to="/comunidad" onClick={() => {propiedades.setEnlaceSeleccionado("comunidad")}}>Comunidad</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (propiedades.enlaceSeleccionado === "perfil" ? " active text-decoration-underline" : "")}
                    to="/perfil" onClick={() => {propiedades.setEnlaceSeleccionado("perfil")}}>Perfil</Link>
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion