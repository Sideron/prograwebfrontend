import { Link } from "react-router-dom"
import { useState } from "react"

const EnlacesDeBarraDeNavegacion = () => {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("")

    return <>
        <div className="collapse navbar-collapse" id="div_colapsable">
            <div className="navbar-nav">
                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "tienda" ? " active text-decoration-underline" : "")}
                    to="/tienda" onClick={() => {setEnlaceSeleccionado("tienda")}}>Tienda</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "biblioteca" ? " active text-decoration-underline" : "")}
                    to="/biblioteca" onClick={() => {setEnlaceSeleccionado("biblioteca")}}>Biblioteca</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "comunidad" ? " active text-decoration-underline" : "")}
                    to="/comunidad" onClick={() => {setEnlaceSeleccionado("comunidad")}}>Comunidad</Link>

                <Link className={"nav-link fs-6 fw-medium text-uppercase" + (enlaceSeleccionado === "perfil" ? " active text-decoration-underline" : "")}
                    to="/perfil" onClick={() => {setEnlaceSeleccionado("perfil")}}>Perfil</Link>
            </div>
        </div>
    </>
}

export default EnlacesDeBarraDeNavegacion